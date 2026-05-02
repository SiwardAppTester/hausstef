// Unsplash images, hand-picked for "Ehrwald / Tirol family house" vibe.
// All resolved via /photos/{slug}/download redirect, so the visual matches the description.
// Replace with own photos of Haus Stefanie when available.
const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const IMG = {
  // HERO / EXTERIORS — wooden chalet houses with mountains
  heroChalet: u('1601565005354-4f3a983ea0c1', 2000), // brown wooden house near snow mountain
  villageAerial: u('1515263259-26c5a137b143', 1600), // aerial view Tirol village
  chaletPink: u('1717711077206-08253636a1fc', 1600), // tirol-style house with balcony
  chaletTrees: u('1749185422716-6d51ddfd9124', 1600), // beautiful house among trees
  mountainLodge: u('1560794344-522e5d007487', 1600), // grey/brown mountain lodge
  valleyHouse: u('1660979462697-d6b218018867', 1600), // building with valley view
  woodHouse: u('1601062832242-33a1a0938d6e', 1600), // brown wooden house meadow
  meadowHouse: u('1629756217542-9776df840c4d', 1600), // wooden house blue sky
  cabinSlope: u('1755239183966-f0b1cd006237', 1600), // wooden cabin mountainside
  houseTrees: u('1663101387482-a02065c0fe82', 1600), // house with trees
  greenFieldHouse: u('1748675842178-ad80b40663df', 1600), // wooden house green field
  alpsFlowers: u('1727422710098-98852485691c', 1600), // alpine meadow flowers (summer)
  stoneHouse: u('1753450727558-28e089a39a89', 1600), // stone house in mountains
  oldBarn: u('1773869254512-c6b45294673f', 1600), // old wooden barn

  // EXTRA EXTERIORS
  cabinValley: u('1531664527180-0f8f6dfc4ddc', 1600), // brown house across glaciers
  whiteHouse: u('1718794921034-22da174ddcfa', 1600), // white house side of road
  fieldHouse: u('1636619306267-e550af938510', 1600), // house in field with mountains
  meadowHouse2: u('1627922221353-2691a2de6073', 1600), // brown wooden house green field

  // MOUNTAIN LANDSCAPES (winter / scenic)
  snowMountain: u('1650962501655-ae0360dac4a8', 2000), // snowy mountain with trees
  winterAlps: u('1652047412407-acc7b7f7ed8f', 2000), // alpine winter scenery
  winterPeaks: u('1690362856684-948cfbb22f68', 1600), // mountain landscape snow
  winterTerrain: u('1650899286151-36d60b1da49b', 1600), // winter alpine terrain

  // INTERIORS — cozy alpine cabin vibes
  livingFireplace: u('1631941392209-70cad44ecfb7', 1600), // fireplace living room
  bedroomWood: u('1631554668504-79dd66bbfb94', 1600), // wooden bedroom
  kitchenAlpine: u('1631586821527-47cf7e72bb0d', 1600), // alpine kitchen with stools
  livingFireplace2: u('1712669869857-c9c0c098d024', 1600), // living room fireplace
  cozySeating: u('1704018924280-96d1ab64d213', 1600), // cozy seating area
  lodgeFireplace: u('1771824980188-abd59db07585', 1600), // family lodge fireplace
  woodChairs: u('1768413309479-2f3416829a19', 1600), // chairs with wood basket
  cabinModern: u('1634849662801-a00d83441092', 1600), // modern cabin living
} as const;

export type ImgKey = keyof typeof IMG;
