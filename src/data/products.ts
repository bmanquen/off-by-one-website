export interface Product {
  slug: string;
  name: string;
  nameAccent: string;
  domain: string;
  shortDescription: string;
  tagline: string;
  tag: string;
  status: string;
  overview: string[];
  features: { num: string; heading: string; body: string }[];
  builtFor: string;
}

export const products: Product[] = [
  {
    slug: 'coffee-companion',
    name: 'Coffee Companion',
    nameAccent: 'Companion',
    domain: 'coffeecompanion.app',
    shortDescription:
      'A field notebook for the obsessed home brewer — recipes, water, and tasting notes in one place.',
    tagline:
      'A field notebook for the obsessed home brewer — recipes, water, equipment, and tasting notes, all in one place you actually want to open.',
    tag: 'Consumer · Web & Mobile',
    status: 'Coming Soon',
    overview: [
      'Coffee Companion is a brewing journal and reference tool built for people who treat coffee as a craft. It is the app we wished existed when we were chasing a cleaner Tetsu Kasuya, dialing in a new espresso bag, or trying to remember what worked the last time we used a particular Ethiopian.',
      'Track every brew with the variables that actually matter — dose, ratio, grind, water profile, time, and result — and watch patterns emerge across origins, processes, and equipment. Tasting notes live alongside the brew so you can flip back and remember what a coffee actually tasted like, not just what the bag promised.',
      'The whole app is designed to be as fast to use as a paper notebook, with the recall and structure of software. No cloud accounts required for the core experience — your data is yours, and yours first.',
    ],
    features: [
      {
        num: '01',
        heading: 'Brew tracking',
        body: 'Log pour-overs, espresso shots, immersion, and cold brew with the variables that matter most for each method. Reuse recipes with one tap.',
      },
      {
        num: '02',
        heading: 'Water chemistry',
        body: 'Build and save water profiles by mineral content. Match recipes to the water you brewed them with so the results are reproducible.',
      },
      {
        num: '03',
        heading: 'Recipe library',
        body: 'A first-class home for the recipes you actually use. Fork them, version them, and bring grinder settings and timings along for the ride.',
      },
      {
        num: '04',
        heading: 'Equipment shelf',
        body: 'Capture every grinder, dripper, scale, and kettle in your kit. Brews remember the gear they were made on so comparisons stay honest.',
      },
      {
        num: '05',
        heading: 'Tasting notes',
        body: 'Score brews on a flavor wheel, attach photos, and link tasting notes to the bag. Build a memory of what each coffee actually tastes like.',
      },
      {
        num: '06',
        heading: 'Shot logging',
        body: 'Pull-by-pull espresso logging with weight in, weight out, time, and temperature. Visualize how a bag evolves as it ages.',
      },
    ],
    builtFor:
      'Coffee Companion is built for the obsessed home brewer — the person with three drippers, a refractometer, and an opinion about water. If you have ever taken notes on a brew in your phone notes app, this is for you.',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
