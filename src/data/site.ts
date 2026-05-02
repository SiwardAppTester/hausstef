export const SITE = {
  name: 'Haus Stefanie',
  tagline: 'Vier vakantie­appartementen in Ehrwald — direct onder de Zugspitze',
  url: 'https://hausstefanie.nl',
  locale: 'nl-NL',
  address: {
    street: 'Dr.-Ludwig-Ganghofer-Straße 43',
    postalCode: '6632',
    city: 'Ehrwald',
    region: 'Tirol',
    country: 'AT',
    lat: 47.4019,
    lng: 10.9136,
  },
  description:
    'Haus Stefanie verhuurt vier 4-persoons vakantieappartementen in Ehrwald, Tirol. Direct van de Nederlandse familie — geen tussenpersoon, geen boekingscommissie, gewoon persoonlijk contact.',
  keywords: [
    'appartement Ehrwald',
    'vakantieappartement Ehrwald',
    'Ehrwald Tirol',
    'Zugspitze appartement',
    'vakantiehuis Ehrwald Nederlandse eigenaar',
    'Haus Stefanie Ehrwald',
    'wintersport Ehrwald',
    'Zugspitz Arena',
  ],
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/#appartementen', label: 'Appartementen' },
  { href: '/ehrwald', label: 'Ehrwald' },
  { href: '/winter', label: 'Winter' },
  { href: '/zomer', label: 'Zomer' },
  { href: '/route', label: 'Route' },
  { href: '/contact', label: 'Contact' },
] as const;
