export const CATEGORIES = [
  { id: "astrophysics", label: "Astrophysics", icon: "Atom", color: "blue" },
  { id: "exploration", label: "Exploration", icon: "Rocket", color: "purple" },
  { id: "technology", label: "Technology", icon: "Satellite", color: "pink" },
  { id: "phenomena", label: "Phenomena", icon: "Sparkles", color: "amber" },
];

export const ARTICLES = [
  {
    id: 1,
    slug: "james-webb-deepest-field",
    category: "Exploration",
    categoryId: "exploration",
    title: "The James Webb Update: Deepest Field Yet",
    description:
      "A look at the most recent high-resolution captures from the JWST, revealing ancient galaxies from the dawn of time.",
    excerpt:
      "The James Webb Space Telescope has captured its deepest infrared image yet, revealing galaxies that existed over 13 billion years ago.",
    content: `
      <p>The James Webb Space Telescope (JWST) has achieved what astronomers thought would take years to accomplish—capturing the deepest infrared images of the early universe ever seen.</p>
      
      <h2>A Window to the Early Universe</h2>
      <p>The latest deep field observation reveals thousands of galaxies in unprecedented detail. These ancient light sources date back to just 400 million years after the Big Bang, when the universe was still in its infancy.</p>
      
      <h2>What Makes This Special</h2>
      <p>Unlike its predecessor Hubble, Webb observes in infrared wavelengths, allowing it to peer through cosmic dust clouds that previously obscured our view. The telescope's 6.5-meter gold-coated mirror collects significantly more light, enabling observations of extremely faint, distant objects.</p>
      
      <h2>Scientific Implications</h2>
      <p>These observations challenge our understanding of early galaxy formation. The density and structure of these ancient galaxies suggest that galaxy formation began earlier than theoretical models predicted.</p>
    `,
    date: "April 10, 2026",
    readTime: "6 min read",
    status: "Latest",
    statusType: "success",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    slug: "black-hole-event-horizons",
    category: "Astrophysics",
    categoryId: "astrophysics",
    title: "Black Hole Event Horizons Explained",
    description:
      "Theoretical breakthroughs in understanding the physics at the very edge of gravitational collapse.",
    excerpt:
      "New theoretical frameworks are revolutionizing our understanding of what happens at the boundary of black holes.",
    content: `
      <p>Black holes remain among the most mysterious objects in the universe. Recent theoretical advances are shedding new light on what happens at their boundaries.</p>
      
      <h2>The Event Horizon</h2>
      <p>The event horizon represents the point of no return—the boundary beyond which nothing, not even light, can escape. But what exactly happens at this edge?</p>
      
      <h2>New Theoretical Insights</h2>
      <p>Recent work combining quantum mechanics and general relativity suggests that the information paradox may be resolved through Hawking radiation. This theoretical radiation could allow information to escape from black holes over extremely long timescales.</p>
      
      <h2>Observational Evidence</h2>
      <p>The Event Horizon Telescope has captured direct images of black hole shadows, providing unprecedented views of these cosmic giants.</p>
    `,
    date: "April 8, 2026",
    readTime: "8 min read",
    status: "Trending",
    statusType: "warning",
    image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    slug: "interstellar-propulsion-systems",
    category: "Technology",
    categoryId: "technology",
    title: "Propulsion Systems for Interstellar Travel",
    description:
      "Analyzing the feasibility of ion drives and solar sails for the next generation of deep-space probes.",
    excerpt:
      "Traditional chemical rockets won't take us to the stars. New propulsion technologies are making interstellar travel a realistic goal.",
    content: `
      <p>The dream of traveling to other stars requires propulsion systems far more advanced than anything we use today.</p>
      
      <h2>Ion Drives</h2>
      <p>Ion propulsion uses electric fields to accelerate charged particles to extreme velocities. While providing minimal thrust, ion drives can operate for years, achieving incredible speeds over time.</p>
      
      <h2>Solar Sails</h2>
      <p>Enormous reflective sails catching solar radiation pressure could propel spacecraft without fuel. Recent tests have demonstrated the viability of this technology.</p>
      
      <h2>The Breakthrough</h2>
      <p>Projects like Breakthrough Starshot propose using powerful ground-based lasers to accelerate light-sail spacecraft to 20% the speed of light, making interstellar journeys possible within a single lifetime.</p>
    `,
    date: "April 5, 2026",
    readTime: "12 min read",
    status: "Deep Dive",
    statusType: "neutral",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    slug: "saturn-rings-closer-look",
    category: "Phenomena",
    categoryId: "phenomena",
    title: "Saturn's Rings: A Closer Look",
    description:
      "New data reveals the intricate structure and composition of Saturn's magnificent ring system.",
    excerpt:
      "Cassini's final dives have revealed that Saturn's rings are far more complex than we ever imagined.",
    content: `
      <p>Saturn's rings have captivated observers for centuries. New data from the Cassini mission reveals they're even more spectacular than we thought.</p>
      
      <h2>Ring Composition</h2>
      <p>The rings are primarily composed of water ice, with traces of rock and dust. The particles range from tiny grains to mountain-sized chunks.</p>
      
      <h2>Structural Complexity</h2>
      <p>What appears as simple bands from Earth is actually a complex system of thousands of distinct ringlets, each with its own orbital characteristics.</p>
      
      <h2>Origin Mysteries</h2>
      <p>Whether the rings formed with Saturn or are the result of a destroyed moon remains one of solar system science's great questions.</p>
    `,
    date: "April 3, 2026",
    readTime: "5 min read",
    status: "Featured",
    statusType: "success",
    image: "https://images.unsplash.com/photo-1614730341194-75c607400070?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    slug: "mars-water-discovery",
    category: "Exploration",
    categoryId: "exploration",
    title: "Water Ice Deposits on Mars",
    description:
      "Ground-penetrating radar has revealed massive water ice deposits beneath the Martian surface.",
    excerpt:
      "Beneath the red dust of Mars lies enough water to transform human exploration of the Red Planet.",
    content: `
      <p>Mars has always held the promise of water. New discoveries confirm what scientists have hoped for—vast reservoirs of water ice just below the surface.</p>
      
      <h2>The Discovery</h2>
      <p>Mars Express radar has identified multiple layers of water ice extending hundreds of meters deep in Utopia Planitia.</p>
      
      <h2>Implications for Exploration</h2>
      <p>These deposits could provide drinking water, oxygen, and hydrogen fuel for future human missions, making Mars colonization significantly more feasible.</p>
    `,
    date: "March 28, 2026",
    readTime: "7 min read",
    status: "Popular",
    statusType: "success",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e44b0c?w=800&h=500&fit=crop",
  },
  {
    id: 6,
    slug: "exoplanet-atmospheres",
    category: "Astrophysics",
    categoryId: "astrophysics",
    title: "Probing Exoplanet Atmospheres",
    description:
      "How JWST is analyzing the chemical composition of planets around other stars.",
    excerpt:
      "For the first time, we can actually analyze the atmospheres of exoplanets, searching for signs of life.",
    content: `
      <p>The search for life beyond Earth has taken a dramatic turn with our ability to study exoplanet atmospheres.</p>
      
      <h2>Transmission Spectroscopy</h2>
      <p>When a planet passes in front of its star, starlight filters through its atmosphere, absorbing specific wavelengths that reveal chemical composition.</p>
      
      <h2>First Results</h2>
      <p>JWST has detected water vapor, carbon dioxide, and even possible methane in several exoplanet atmospheres.</p>
      
      <h2>The Hunt for Biosignatures</h2>
      <p>While we haven't found definitive signs of life yet, we're getting closer to understanding what chemical combinations might indicate biological processes.</p>
    `,
    date: "March 22, 2026",
    readTime: "9 min read",
    status: "Featured",
    statusType: "success",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
  },
];

export function getArticleBySlug(slug) {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categoryId) {
  return ARTICLES.filter((article) => article.categoryId === categoryId);
}

export function getCategoryById(categoryId) {
  return CATEGORIES.find((cat) => cat.id === categoryId);
}