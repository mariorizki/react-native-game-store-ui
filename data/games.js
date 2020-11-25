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
    backgroundColor: '#9F6B82'
  },
  {
    id: 3,
    title: 'Ori and the Will of the Wisps',
    teaser:
      'Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles',
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
    backgroundColor: '#AC8C4C'
  }
];

export default games;
