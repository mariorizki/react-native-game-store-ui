const games = [
  {
    id: 1,
    title: 'Destiny 2',
    teaser:
      'Destiny 2 is an action MMO with a single evolving world that your friends can join anytime, anywhere, absolutely free.',
    description:
      'Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardians look and playstyle.',
    rating: 4.5,
    category: ['Action', 'Multiplayer'],
    age: '17+',
    cover: require('../assets/destiny2-1.jpg'),
    screenshots: [
      require('../assets/destiny2-2.jpg'),
      require('../assets/destiny2-3.jpg'),
      require('../assets/destiny2-4.jpg'),
      require('../assets/destiny2-5.jpg'),
      require('../assets/destiny2-6.jpg')
    ],
    backgroundColor: '#3A55A2'
  },
  {
    id: 2,
    title: 'Unforeseen Incidents',
    teaser:
      'Unforeseen Incidents is a classical style interactive mystery set in a beautifully hand-painted world.',
    description:
      'When small-town handyman Harper Pendrell meets a dying woman in the street, he unwittingly stumbles into a diabolical conspiracy – a mystery only he can solve.',
    rating: 3.8,
    category: ['Adventure', 'Indie'],
    age: '13+',
    cover: require('../assets/unforeseen-1.jpg'),
    screenshots: [
      require('../assets/unforeseen-2.jpg'),
      require('../assets/unforeseen-3.jpg'),
      require('../assets/unforeseen-4.jpg'),
      require('../assets/unforeseen-5.jpg')
    ],
    backgroundColor: '#84637A'
  },
  {
    id: 3,
    title: 'Ori and the Will of the Wisps',
    teaser:
      'Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles.',
    description:
      'The little spirit Ori is no stranger to peril, but when a fateful flight puts the owlet Ku in harm’s way, it will take more than bravery to bring a family back together, heal a broken land, and discover Ori’s true destiny.',
    rating: 4.7,
    category: ['Action', 'Adventure'],
    age: '13+',
    cover: require('../assets/ori-1.jpg'),
    screenshots: [
      require('../assets/ori-2.jpg'),
      require('../assets/ori-3.jpg'),
      require('../assets/ori-4.jpg'),
      require('../assets/ori-5.jpg')
    ],
    backgroundColor: '#AC8C4C',
    purchased: true
  },
  {
    id: 4,
    title: 'Need for Speed™ Heat Deluxe Edition',
    teaser:
      'Hustle by day and risk it all at night in Need for Speed™ Heat Deluxe Edition.',
    description:
      'A thrilling race experience pits you against a city’s rogue police force as you battle your way into street racing’s elite.',
    rating: 4,
    category: ['Racing', 'Sports', 'Multiplayer'],
    age: '8+',
    cover: require('../assets/nfs-1.jpg'),
    screenshots: [
      require('../assets/nfs-2.jpg'),
      require('../assets/nfs-3.jpg'),
      require('../assets/nfs-4.jpg'),
      require('../assets/nfs-5.jpg')
    ],
    backgroundColor: '#34627D'
  },
  {
    id: 5,
    title: 'Planet Zoo',
    teaser:
      'Build a world for wildlife in Planet Zoo. From the developers of Planet Coaster and Zoo Tycoon comes the ultimate zoo sim.',
    description:
      'Construct detailed habitats, manage your zoo, and meet authentic living animals who think, feel and explore the world you create around them.',
    rating: 4.8,
    category: ['Simulation', 'Strategy'],
    age: '3+',
    cover: require('../assets/zoo-1.jpg'),
    screenshots: [
      require('../assets/zoo-2.jpg'),
      require('../assets/zoo-3.jpg'),
      require('../assets/zoo-4.jpg'),
      require('../assets/zoo-5.jpg'),
      require('../assets/zoo-6.jpg')
    ],
    backgroundColor: '#264112'
  },
  {
    id: 6,
    title: 'Spirit of The North',
    teaser:
      'Spirit of the North is a single-player 3rd-person adventure game inspired by the breathtaking and mysterious landscapes of Iceland.',
    description:
      'Play as an ordinary red fox whose story becomes entwined with the guardian of the Northern Lights, a female spirit fox.',
    rating: 4.1,
    category: ['Casual', 'indie'],
    age: '8+',
    cover: require('../assets/spirit-1.jpg'),
    screenshots: [
      require('../assets/spirit-2.jpg'),
      require('../assets/spirit-3.jpg'),
      require('../assets/spirit-4.jpg'),
      require('../assets/spirit-5.jpg')
    ],
    backgroundColor: '#161712'
  },
  {
    id: 7,
    title: 'Octopath Traveler',
    teaser:
      'Eight travelers. Eight adventures. Eight roles to play. Embark on an epic journey across the vast and wondrous world of Orsterra.',
    description:
      '- Play as eight different characters, each with their own stories to uncover and side quests to complete.\n- Explore the enchanting yet perilous world of Orsterra, spanning 8 vast regions and discover each character’s full story as their journey unfolds.\n- Use each character’s distinctive abilities (Path Actions), skills and talents in frenetic battles',
    rating: 5,
    category: ['RPG'],
    age: '13+',
    cover: require('../assets/octopath-1.jpg'),
    screenshots: [
      require('../assets/octopath-2.jpg'),
      require('../assets/octopath-3.jpg'),
      require('../assets/octopath-4.jpg'),
      require('../assets/octopath-5.jpg')
    ],
    backgroundColor: '#524324'
  }
];

export default games;

// {
//   title: 'Sonic & SEGA All-Stars Racing'
// }
