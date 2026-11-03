// Prices are per vehicle size: [sedan/coupe, SUV/crossover, 3-row/truck/van].
export const vehicleSizes = ['Sedan / Coupe', 'SUV / Crossover', '3-Row / Truck / Van']

export const services = [
  {
    id: 'interior',
    name: 'Interior Detail',
    short:
      'Fresh, clean and cozy again. We get into every seam, vent and cupholder so the inside feels like day one.',
    priceRange: '$149–$199',
    prices: [149, 179, 199],
    duration: '2.5–3.5 hrs',
    bestFor: 'Family haulers, commuter cars, and anything that’s seen a car seat or a happy dog.',
    includes: [
      'A thorough vacuum under the seats, along the rails, and in the trunk',
      'Carpets and floor mats shampooed and hot-water extracted',
      'Leather gently cleaned and conditioned, or cloth seats steam-cleaned',
      'Dash, console, vents, door panels and cupholders detailed by hand',
      'Streak-free interior glass and mirrors',
      'A matte UV protectant on plastics that looks clean, never greasy',
      'Light odor neutralizing so it smells fresh, not perfumed',
    ],
  },
  {
    id: 'exterior',
    name: 'Exterior Detail',
    short:
      'A careful hand wash, wheels done properly, and a sealant that keeps your car shining (and beading water) for months.',
    priceRange: '$129–$179',
    prices: [129, 149, 179],
    duration: '2–2.5 hrs',
    bestFor: 'Keeping a well-loved car looking its best between full details.',
    includes: [
      'Foam pre-soak and a two-bucket hand wash with pH-neutral soap',
      'Wheel faces, barrels and lug nuts cleaned; tires scrubbed',
      'Bugs, tar and road film safely removed',
      'Door jambs wiped down (the spot most washes skip)',
      'Exterior glass cleaned streak-free',
      'Spray sealant for about 3 months of protection',
      'A satin tire finish that won’t sling onto your paint',
    ],
  },
  {
    id: 'full',
    name: 'Full Detail',
    short:
      'Our favorite to do. Inside and out, plus a clay bar treatment and a longer-lasting sealant. It’s a real reset.',
    priceRange: '$249–$349',
    prices: [249, 299, 349],
    duration: '4–5 hrs',
    bestFor: 'A seasonal refresh, getting ready to sell, or a car that’s overdue for some love.',
    popular: true,
    includes: [
      'Everything in our Interior Detail',
      'Everything in our Exterior Detail',
      'Clay bar treatment to lift bonded grime out of the paint',
      'Hand-applied paint sealant with about 6 months of protection',
      'Exterior trim cleaned and protected',
      'Engine bay wipe-down, just ask',
    ],
  },
  {
    id: 'ceramic',
    name: 'Paint Correction & Ceramic Coating',
    short:
      'We polish away swirls and light scratches, then lock in that gloss with a ceramic coating that lasts for years.',
    priceRange: 'From $699',
    prices: [699, 849, 999],
    pricesFrom: true,
    duration: '1–2 days',
    bestFor: 'New cars, leases you want to return spotless, or paint that’s lost its shine.',
    includes: [
      'Full decontamination wash, iron remover and clay bar',
      'Paint depth readings before we polish, so we never take too much',
      'One-step polish to remove most swirls, or two-step if you’d like',
      '2-, 3- or 5-year ceramic coating options',
      'Wheels and glass coated on request',
      'A simple care guide, plus a check-in visit two weeks later',
    ],
    note: 'Every car’s paint is different, so we like to see it in person before giving you a final price.',
  },
]

export const addOns = [
  { name: 'Pet hair removal', price: '$40–$75' },
  { name: 'Winter salt & stain treatment', price: 'From $35' },
  { name: 'Headlight restoration', price: '$89' },
  { name: 'Engine bay detail', price: '$49' },
  { name: 'Ozone odor treatment', price: '$79' },
  { name: 'Child seat deep clean', price: '$25 / seat' },
]

export const serviceOptions = [
  ...services.map((s) => ({ value: s.id, label: s.name })),
  { value: 'maintenance', label: 'Maintenance Plan' },
  { value: 'not-sure', label: 'Not sure? Help me choose' },
]
