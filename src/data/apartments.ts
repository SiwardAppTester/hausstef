import { IMG, type ImgKey } from './images';

export type Apartment = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  capacity: number;
  bedrooms: number;
  size: string;
  owner: { name: string; phone: string; email: string };
  hero: ImgKey;
  gallery: ImgKey[];
  priceFrom: number;
};

export const APARTMENTS: Apartment[] = [
  {
    slug: 'appartement-1',
    number: '1',
    name: 'Appartement 1',
    tagline: 'Warm, klassiek alpenhout — ideaal voor een gezin',
    description:
      'Onze klassieke 4-persoons unit, met warme houten afwerking en uitzicht op de Zugspitze. Twee slaapkamers, eigen badkamer en een ruime woonkamer met openslaande deuren naar het terras. Onder beheer van Marjolein en Robert sinds we Haus Stefanie in 2008 in de familie hebben.',
    features: [
      '4 slaapplaatsen, 2 slaapkamers',
      'Volledig uitgeruste keuken',
      'Eigen terras op het zuiden',
      'Ski-opbergruimte op de begane grond',
      'WiFi, smart-tv, Nederlandse zenders',
      'Beddengoed, handdoeken & eindschoonmaak inbegrepen',
    ],
    capacity: 4,
    bedrooms: 2,
    size: '~55 m²',
    owner: {
      name: 'Marjolein Hanegraaf & Robert van Berkel',
      phone: '+31 6 51188698',
      email: 'app1@hausstefanie.nl',
    },
    hero: 'chaletTrees',
    gallery: ['livingFireplace', 'bedroomWood', 'alpsFlowers', 'valleyHouse'],
    priceFrom: 725,
  },
  {
    slug: 'appartement-2',
    number: '2',
    name: 'Appartement 2',
    tagline: 'Helder, modern en licht — frisse alpine-stijl',
    description:
      'Het modernste van de vier. Recent vernieuwd door Renato en Maaike: open keuken, lichte kleuren, een fijne loungebank en panoramaramen die het hele dal binnenhalen. Twee slaapkamers, geschikt voor twee stellen of een gezin met kinderen.',
    features: [
      '4 slaapplaatsen, 2 slaapkamers',
      'Open keuken met vaatwasser',
      'Vloerverwarming in de badkamer',
      'Balkon met bergzicht',
      'Eigen ski-locker met droogkast',
      'Beddengoed, handdoeken & eindschoonmaak inbegrepen',
    ],
    capacity: 4,
    bedrooms: 2,
    size: '~58 m²',
    owner: {
      name: 'Renato & Maaike Oud-Hanegraaf',
      phone: '+31 35 6479755',
      email: 'app2@hausstefanie.nl',
    },
    hero: 'meadowHouse2',
    gallery: ['cabinModern', 'kitchenAlpine', 'villageAerial', 'snowMountain'],
    priceFrom: 750,
  },
  {
    slug: 'appartement-4',
    number: '4',
    name: 'Appartement 4',
    tagline: 'Authentieke Tiroler sfeer — boven in het huis',
    description:
      'Op de bovenste verdieping van Haus Stefanie. Schuine plafonds, dakkapel-uitzicht en een houten interieur met de meeste karakter. Liesbeth woont een groot deel van het jaar in Ehrwald en kent het dorp van binnen en buiten — vraag haar gerust naar de beste tochten.',
    features: [
      '4 slaapplaatsen, 2 slaapkamers',
      'Volledig uitgeruste keuken',
      'Karakteristieke dakbalken',
      'Uitzicht over het dorp',
      'Lokale tips van Liesbeth ter plaatse',
      'Beddengoed, handdoeken & eindschoonmaak inbegrepen',
    ],
    capacity: 4,
    bedrooms: 2,
    size: '~52 m²',
    owner: {
      name: 'Liesbeth Hanegraaf',
      phone: '+43 699 134 66 878',
      email: 'app4@hausstefanie.nl',
    },
    hero: 'woodHouse',
    gallery: ['oldBarn', 'snowMountain', 'fieldHouse', 'cabinSlope'],
    priceFrom: 725,
  },
  {
    slug: 'appartement-liesl',
    number: 'L',
    name: 'Appartement Liesl',
    tagline: 'Knus en compact — perfect voor twee stellen',
    description:
      'Vernoemd naar oma Liesl, die ooit dit huis bouwde. Een gezellig appartement met houten lambrisering, een efficiënt ingerichte keuken en een sfeervolle eethoek. Ideaal voor twee stellen of een klein gezin dat dichtbij elkaar wil zitten na een dag in de bergen.',
    features: [
      '4 slaapplaatsen, 2 slaapkamers',
      'Compacte volledig uitgeruste keuken',
      'Knusse eethoek met houten lambrisering',
      'Op de begane grond — makkelijk in en uit',
      'Eigen ski-opbergruimte',
      'Beddengoed, handdoeken & eindschoonmaak inbegrepen',
    ],
    capacity: 4,
    bedrooms: 2,
    size: '~48 m²',
    owner: {
      name: 'Familie Hanegraaf',
      phone: '+31 6 51188698',
      email: 'liesl@hausstefanie.nl',
    },
    hero: 'cabinSlope',
    gallery: ['lodgeFireplace', 'cozySeating', 'meadowHouse', 'alpsFlowers'],
    priceFrom: 700,
  },
];

export const PRICING_NOTES = [
  'Prijzen zijn per appartement per week voor 4 personen.',
  'Extra persoon: € 85 per week.',
  'Inclusief beddengoed, handdoeken, keukenlinnen en eindschoonmaak.',
  'Exclusief toeristenbelasting: € 3,00 per persoon per dag (kinderen tot 15 jaar vrijgesteld).',
];

export const PRICING_TABLE_2026 = [
  { period: 'Januari – 14 februari', price: 1000, season: 'winter' },
  { period: '14 februari – 1 maart', price: 1050, season: 'winter-piek' },
  { period: '1 maart – 12 april', price: 1000, season: 'winter' },
  { period: '12 april – 30 juni', price: 750, season: 'tussenseizoen' },
  { period: 'Juli & augustus', price: 825, season: 'zomer' },
  { period: 'September – 23 december', price: 750, season: 'tussenseizoen' },
  { period: '19 december – 3 januari 2027', price: 1075, season: 'feestdagen' },
];
