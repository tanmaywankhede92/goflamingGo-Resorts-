import { IMAGES } from './images';

/**
 * GO FLAMINGO RESORT — NATURE, FLORA & EVENING WILDERNESS STRUCTURED DATA
 * 
 * Factual content for walking trails on foot, indigenous botanical treasures,
 * evening wilderness experiences (stargazing, bonfire), and respectful local culture.
 * Strictly separates resort evening moments from official park safaris.
 */

export const NATURE_DATA = {
  hero: {
    badge: 'Forest On Foot · Pench',
    eyebrow: 'Nature Trails & Evening Wilderness',
    title: 'Nature Walks, Botany & Evening Sky',
    subtitle: 'Slow down and discover the subtle wonders of Pench. Explore walking trails on foot, indigenous trees of Central India, and quiet evening bonfires beneath unpolluted night skies.',
    image: IMAGES.wildlife.forestCanopy,
  },

  walkingPhilosophy: {
    eyebrow: 'Slow Exploration',
    title: 'Slow Down & Walk the Forest',
    lead: 'While an open Gypsy offers distance and excitement, walking on foot along designated peripheral nature paths engages all your senses.',
    body: [
      'Accompanied by knowledgeable naturalists where officially permitted along designated buffer trails, a walking exploration reveals the intricate micro-ecosystems of Pench that are missed from a vehicle.',
      'Touch the textured bark of ancient teak trees, listen to the rhythmic tapping of woodpeckers, observe fresh pugmarks in sandy nala beds, and inhale the earthy fragrance of forest soil.'
    ],
    highlights: [
      {
        title: 'Sensory Immersion',
        desc: 'Listen to rustling leaves, decode subtle insect clicks, and feel the cooler air of shaded forest groves.'
      },
      {
        title: 'Micro-Ecology',
        desc: 'Observe intricate spider webs, butterfly host plants, fungal colonies, and active termite mounds.'
      },
      {
        title: 'Botanical Insight',
        desc: 'Learn about indigenous flora, seasonal seed dispersal, and traditional tribal uses of medicinal herbs.'
      }
    ]
  },

  flora: [
    {
      commonName: 'Ghost Tree (Kullu)',
      scientificName: 'Sterculia urens',
      tag: 'Iconic Central Indian Flora',
      desc: 'One of the most striking trees of Pench’s dry rocky ridges. Famous for its pale, paper-smooth bark that appears luminous white in moonlight. The bark shifts from silvery white in dry winter to soft greenish hues during humid months.',
      highlights: 'Produces edible gum and stands out dramatically against the surrounding brown winter landscape.'
    },
    {
      commonName: 'Mahua Tree',
      scientificName: 'Madhuca longifolia',
      tag: 'Lifeline of the Forest',
      desc: 'A large deciduous tree deeply woven into the ecology and tribal culture of Central India. In spring (March–April), the tree sheds millions of sweet, succulent cream-colored blossoms that attract deer, langurs, birds, and sloth bears.',
      highlights: 'A cornerstone species supporting forest herbivores through the dry pre-monsoon heat.'
    },
    {
      commonName: 'Teak',
      scientificName: 'Tectona grandis',
      tag: 'Canopy Giant of Pench',
      desc: 'The dominant forest timber of Pench Tiger Reserve, characterized by massive broad leaves and towering straight trunks that form the majestic canopy of Kipling’s jungle.',
      highlights: 'Provides dense shade in summer and allows dappled winter sunlight to reach the forest floor.'
    },
    {
      commonName: 'Bamboo Clumps',
      scientificName: 'Dendrocalamus strictus',
      tag: 'Dense Understory Haven',
      desc: 'Thriving in moist valleys and along seasonal stream banks, dense bamboo clumps provide crucial daytime refuge for herbivores, birds, and predators seeking shade.',
      highlights: 'Offers sheltering cover for chital fawns and prime foraging for wild boars and elephants.'
    }
  ],

  forestDetails: {
    eyebrow: 'Ecology on the Ground',
    title: 'Insects, Butterflies & Tracks',
    lead: 'The forest floor is alive with busy, vital micro-organisms and intricate animal traces.',
    items: [
      {
        title: 'Pugmarks & Tracks',
        desc: 'Discover paw prints of jungle cats, hooves of spotted deer, and the distinct broad impressions of sloth bears preserved in soft dry mud.'
      },
      {
        title: 'Butterflies & Pollinators',
        desc: 'Spot common jezebels, crimson roses, and blue mormons fluttering around wildflowers and damp river sand.'
      },
      {
        title: 'Architecture of Termite Mounds',
        desc: 'Marvel at towering earthen mounds constructed by colonies of termites—architectural wonders that maintain constant internal humidity.'
      },
      {
        title: 'Giant Wood Spiders',
        desc: 'Observe the golden orb webs of Nephila spiders strung across canopy branches, glistening with early morning dew.'
      }
    ]
  },

  eveningsAtResort: {
    eyebrow: 'After Sunset',
    title: 'Evenings at Go Flamingo',
    lead: 'When the daytime safari ends, a peaceful wilderness atmosphere descends over the resort.',
    note: 'Note: These evening experiences take place within the peaceful resort grounds and are distinct from daytime reserve safaris.',
    features: [
      {
        title: 'Stargazing Under Dark Skies',
        desc: 'Free from the light pollution of metropolitan cities, Pench offers brilliant views of the night sky, glittering constellations, and the Milky Way on clear winter nights.'
      },
      {
        title: 'Campfire & Warm Gatherings',
        desc: 'Gather around a crackling outdoor bonfire on the central resort lawn to share safari stories, enjoy warm local Vidarbha appetizers, and unwind.'
      },
      {
        title: 'Acoustic Forest Ambiance',
        desc: 'Experience the deep acoustic stillness of the forest periphery—the rhythmic chirping of crickets, the calls of nightjars, and the gentle breeze through teak leaves.'
      },
      {
        title: 'Verandah Solitude',
        desc: 'Sip a hot cup of tea or cocoa on your private cottage sit-out, immersed in absolute tranquility and crisp night air.'
      }
    ]
  },

  localCulture: {
    eyebrow: 'Heritage & Community',
    title: 'Local Culture & Village Experiences',
    lead: 'Pench is surrounded by vibrant rural communities with rich cultural traditions.',
    description: 'Guests interested in authentic cultural immersion can explore traditional village life and regional craftsmanship located near the reserve periphery.',
    points: [
      {
        title: 'Traditional Terracotta Pottery',
        desc: 'Visit nearby artisan settlements such as Pachdhara, where local potters shape clay cookware, pots, and figurines on traditional manual wheels.'
      },
      {
        title: 'Rural Village Life',
        desc: 'Observe gentle agricultural rhythms, weekly village haats (markets), and colorful mud-and-tile houses framed by open fields.'
      },
      {
        title: 'Community Respect',
        desc: 'We encourage quiet, respectful visits that support local craftspeople and celebrate regional heritage without disturbing community life.'
      }
    ]
  },

  mindfulWilderness: {
    title: 'A Mindful Wilderness Approach',
    lead: 'Disconnect from screens, reconnect with nature.',
    body: 'The natural environment around Go Flamingo invites you to slow your pace. Whether reading a book under the shade of a teak tree, floating in the natural stone pool, or taking a quiet sunrise stroll across the lawns, nature in Pench restores clarity and calm.'
  }
};
