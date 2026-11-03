// Single source of truth for contact details. Update here and it changes site-wide.
export const business = {
  name: 'Apex Mobile Detailing',
  owner: 'Chris', // placeholder: use the real owner's first name
  // Portfolio credit shown in the footer. Remove for a real client launch.
  credit: { author: 'Daeshawn Bullock', url: null },
  phoneDisplay: '(571) 555-0142',
  phoneHref: 'tel:+15715550142',
  smsHref: 'sms:+15715550142',
  email: 'hello@apexmobiledetailing.com',
  region: 'Northern Virginia & the DMV',
  hours: [
    { days: 'Monday – Friday', time: '7:30 am – 6:00 pm' },
    { days: 'Saturday', time: '8:00 am – 4:00 pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  serviceArea: {
    'Northern Virginia': [
      'Fairfax',
      'Arlington',
      'Alexandria',
      'McLean',
      'Tysons',
      'Vienna',
      'Falls Church',
      'Reston',
      'Herndon',
      'Springfield',
      'Burke',
      'Annandale',
    ],
    Maryland: ['Bethesda', 'Silver Spring', 'Chevy Chase', 'Rockville', 'Potomac'],
    'Washington, DC': ['Northwest DC', 'Capitol Hill', 'Navy Yard'],
  },
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]
