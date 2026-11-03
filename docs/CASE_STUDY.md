# Case study: Apex Mobile Detailing

_A concept website for a fictional mobile car detailing business in Northern Virginia and the DC area._

## The problem

Mobile detailers live on phone calls and booking requests. Their customers are busy professionals and parents who are usually on a phone, often between other things, and who want two answers fast: **what will it cost?** and **can you come to me?** Most local detailing sites bury both under stock-photo heroes and vague "premium service" copy.

## Goals

1. Make calling or booking possible from anywhere on the site, in one tap on a phone.
2. Show real prices up front, by vehicle size, so people feel safe reaching out.
3. Sound like a small local business run by real people, not a franchise or a template.
4. Load fast on a phone over an average connection, and work for keyboard and screen reader users.

## Who it's for

- **Busy professionals** in Tysons, Arlington and Bethesda who want the car done while they're at work.
- **Families** in the suburbs with car seats, pets and a winter of road salt to deal with.
- **Enthusiasts** who want paint correction and a ceramic coating, and care about how it's done.

## Design decisions

**Palette.** Deep forest green for text and dark panels, a fresh lime for highlights, and warm sage off-whites for backgrounds. Green suggests clean and careful without the "blue car wash" look most competitors use. Lime is kept for small moments: the highlighted words in the headline, the "Most booked" badge and the step numbers.

**Type.** Bricolage Grotesque for headings gives the brand some personality and warmth. Inter for body text keeps prices, lists and forms easy to read.

**Shape and layout.** Generously rounded cards, pill buttons and a varied-size tile grid feel modern and friendly. Light and dark sections alternate so the page has rhythm, and each key section (process, maintenance plan, closing call to action) gets one strong panel.

**Voice.** The copy is written in first person from the owner ("Hi, I'm Chris…"), with specific local details (traffic on 495, road salt, the office garage in Tysons) and plain promises (we text before the arrival window starts, you pay after the walkthrough).

## Conversion features

- Book and call buttons in the hero, the header and every closing section.
- A floating Call / Book bar on phones, always within thumb reach.
- Prices by vehicle size on every service, plus add-ons and a maintenance plan.
- "Book this service" links open the form with that service already selected.
- The form asks only for what a detailer needs to quote, explains that no payment is taken, and blocks Sundays (when the business is closed) with a friendly message.
- An FAQ that answers the real objections: water and power, apartments, rain, payment.

## Engineering

- **React + Vite + Tailwind**, with all content in small data files (`src/data/`), so a real business could update prices or hours without touching layout code.
- **Pre-rendering**: a build step renders each route to static HTML with its own meta tags, social tags and structured data (schema.org `AutoWash`), plus `robots.txt`, a 404 page and (when indexing is on) `sitemap.xml`. React hydrates on top.
- **Performance**: self-hosted variable fonts with preloads, responsive WebP images in three sizes, lazy loading below the fold, and long-lived cache headers for hashed assets.
- **Accessibility**: skip link, landmarks, a focus-trapped mobile menu, visible focus styles, labelled inputs with `aria-invalid` and hints, a keyboard-operable before/after slider, and reveal animations that turn off under `prefers-reduced-motion`.

## Results

Lighthouse on the live site: **100** for accessibility, best practices and SEO on every page, with performance of **97–99 on mobile** and **100 on desktop**. Largest content appears in about 2.3 seconds on a throttled mobile connection and 0.5 seconds on desktop.

Because the business is fictional, the live demo asks search engines not to list it; a single setting turns indexing and the sitemap back on for a real client.

## What I'd do next

- Swap in real photography of the detailer and a real before/after pair from a job.
- Add online scheduling (Cal.com or Square Appointments) so customers can pick a time slot directly.
- Add a Google reviews widget once real reviews exist.
- Track call clicks and form submissions as conversion events in analytics.
- Add a "Service areas" page for each town to help local search.
