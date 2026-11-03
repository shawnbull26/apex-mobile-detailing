import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { CircleCheck, LoaderCircle } from 'lucide-react'
import { business } from '../data/business'
import { serviceOptions } from '../data/services'
import { Button } from './ui/Button'

// Netlify Forms: the hidden static copy in index.html registers "contact".
// To use Formspree/Basin/etc. instead, change FORM_ENDPOINT and drop `form-name`.
const FORM_NAME = 'contact'
const FORM_ENDPOINT = '/'

const encode = (data) => new URLSearchParams(data).toString()

const todayISO = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

// Sunday is closed (see business.hours). Noon avoids timezone edge cases.
const isClosedOn = (isoDate) => new Date(`${isoDate}T12:00:00`).getDay() === 0

const inputClass =
  'mt-2 block w-full rounded-2xl border border-ink-600/70 bg-white px-4 py-3.5 text-base text-ink-950 placeholder:text-ink-600 transition focus:border-ink-800 focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent-400/40'

function Field({ label, htmlFor, optional, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink-900">
        {label}
        {optional ? (
          <span className="ml-1.5 font-normal text-ink-600">(optional)</span>
        ) : (
          <span className="ml-0.5 text-accent-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  )
}

export function ContactForm() {
  const [params] = useSearchParams()
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    date: '',
    message: '',
    'bot-field': '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [minDate, setMinDate] = useState()
  const [dateError, setDateError] = useState('')

  // Browser-only values are applied after hydration so the prerendered HTML matches.
  useEffect(() => setMinDate(todayISO()), [])
  useEffect(() => {
    const preset = params.get('service')
    if (serviceOptions.some((o) => o.value === preset)) setValues((v) => ({ ...v, service: preset }))
  }, [params])

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  function updateDate(e) {
    update(e)
    const closed = e.target.value && isClosedOn(e.target.value)
    const message = closed ? 'We’re closed on Sundays. Please pick another day, or call us to ask about an exception.' : ''
    e.target.setCustomValidity(message)
    setDateError(message)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...values }),
      })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-3xl bg-mist-50 p-8 text-center sm:p-12">
        <CircleCheck className="mx-auto size-12 text-accent-600" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-bold text-ink-950">Thank you, {values.name.split(' ')[0]}.</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-600">
          We got your request and we’re excited to take care of your car. We’ll text you at {values.phone} with a price and a time, usually within a couple of hours
          during business hours.
        </p>
        <p className="mt-6 text-sm text-ink-600">
          In a hurry? Give us a call at{' '}
          <a href={business.phoneHref} className="font-semibold text-ink-950 underline underline-offset-4">
            {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid gap-5 sm:grid-cols-2"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" value={values['bot-field']} onChange={update} tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <Field label="Name" htmlFor="name">
        <input id="name" name="name" type="text" required autoComplete="name" value={values.name} onChange={update} className={inputClass} />
      </Field>

      <Field label="Phone" htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="(703) 555-0123"
          value={values.phone}
          onChange={update}
          className={inputClass}
        />
      </Field>

      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required autoComplete="email" value={values.email} onChange={update} className={inputClass} />
      </Field>

      <Field label="Vehicle" htmlFor="vehicle" optional>
        <input
          id="vehicle"
          name="vehicle"
          type="text"
          placeholder="e.g. 2021 Honda Pilot"
          value={values.vehicle}
          onChange={update}
          className={inputClass}
        />
      </Field>

      <Field label="Service needed" htmlFor="service">
        <select id="service" name="service" required value={values.service} onChange={update} className={inputClass}>
          <option value="" disabled>
            Choose a service
          </option>
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Preferred date" htmlFor="date">
        <input
          id="date"
          name="date"
          type="date"
          required
          min={minDate}
          value={values.date}
          onChange={updateDate}
          aria-invalid={dateError ? true : undefined}
          aria-describedby="date-hint"
          className={inputClass}
        />
        <p id="date-hint" className={`mt-2 text-sm ${dateError ? 'font-medium text-red-700' : 'text-ink-600'}`}>
          {dateError || 'Monday to Saturday'}
        </p>
      </Field>

      <Field label="Anything we should know?" htmlFor="message" optional className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Where the car will be parked, a time that works best, any spills or furry passengers we should know about…"
          value={values.message}
          onChange={update}
          className={inputClass}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-600">
          No payment now. We’ll confirm everything with you first.
          <span className="mt-1 block text-xs">Concept site: requests go to a demo inbox, not a real detailer.</span>
        </p>
        <Button type="submit" size="lg" disabled={status === 'submitting'} className="shrink-0">
          {status === 'submitting' && <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />}
          {status === 'submitting' ? 'Sending…' : 'Send my request'}
        </Button>
      </div>

      <div aria-live="polite" className="sm:col-span-2">
        {status === 'error' && (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            Sorry, something went wrong on our end. Please try again, or give us a call at{' '}
            <a href={business.phoneHref} className="font-semibold underline">
              {business.phoneDisplay}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}
