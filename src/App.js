
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Birds from './pages/Birds';
import Mammals from './pages/Mammals';
import Reptiles from './pages/Reptiles.js';
import AnimalDetails from './components/AnimalDetails';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const animals = [
    {
      id: 1,
      name: 'Echidna',
      group: 'mammal',
      image: '/Animal-images/Echidna.jpeg',
      description: 'Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but dont have beaks at all, in the traditional sense, they have fleshy noses that can be either on the long side or rather short. They dont really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them.',
      diet: ' A predator, then eat meat from other animals such as wallabies and wombats',
      lifespan: '50 years',
    },
    {
      id: 2,
      name: 'Tasmanian Devil',
      group: 'mammal',
      image: '/Animal-images/tas.jpeg',
      description: 'The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devils large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion'
,
      diet: 'eat meat from other animals such as wallabies and wombats',
      lifespan: '5 years in the wild',
    },
    {
      id: 3,
      name: 'quokka ',
      group: 'mammal',
      image: '/Animal-images/Quoka.jpeg',
      description: 'The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, as a kind of rat as big as a common cat. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest (rat nest) in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.',
      diet: 'Plant eaters, they munch on shrubs and grasses',
      lifespan: '10 of years',
    },
    {
      id: 4,
      name: 'frill-necked lizard',
      group: 'reptile',
      image: '/Animal-images/Lizard.jpeg',
      description: ' When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.',
      diet: 'Small insects and spiders',
      lifespan: '20 years',
    },
    {
      id: 5,
      name: 'Hawksbill Turtle',
      group: 'reptile',
      image: '/Animal-images/turtle.jpeg',
      description: 'The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.',
      diet: 'other animals (sponges & jellyfish), sea plants',
      lifespan: '50 yers',
    },
    {
      id: 6,
      name: 'Perentie ',
      group: 'reptile',
      image: '/Animal-images/perentie.jpeg',
      description: 'The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.',
      diet: ', they eat animals like kangaroos, rabbits, lizards and birds',
      lifespan: '20 years',
    },
    {
      id: 7,
      name: 'Cassowary',
      group: 'bird',
      image: '/Animal-images/Cassowary.jpeg',
      description: ': It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida',
      diet: 'Plants matter like fruit, insects and small animals like mice amd lizards',
      lifespan: '20 years',
    },
    {
      id: 8,
      name: 'Kookaburra',
      group: 'bird',
      image: '/Animal-images/kokubura.jpeg',
      description: 'Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.',
      diet: 'Insects and small vertebrates',
      lifespan: '20 years',
    },
    {
      id: 9,
      name: 'Yellow Tailed Black Cockatoo',
      group: 'bird',
      image: '/Animal-images/Yellow-tailed.jpeg',
      description: 'Blue-tongued skinks are large lizards that get their name from their blue tongue, which they display when threatened.',
      diet: 'Fruit, seeds and other plant material',
      lifespan: '41 years',
    }
  ];

  const handleAnimalClick = (animal) => {
    if (selectedAnimal && selectedAnimal.id === animal.id) {
      setSelectedAnimal(null);
    } else {
      setSelectedAnimal(animal);
    }
  };

  const showAnimalDetails = (animal) => {
    setSelectedAnimal(animal);
    setShowDetails(true);
  };

  const closeAnimalDetails = () => {
    setShowDetails(false);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mammals">Mammals</Link></li>
            <li><Link to="/birds">Birds</Link></li>
            <li><Link to="/reptiles">Reptiles</Link></li>
          </ul>
        </nav>
        <div className="content-container">
          <Routes>
            <Route path="/" element={
              <Home 
                animals={animals} 
                selectedAnimal={selectedAnimal} 
                onAnimalClick={handleAnimalClick} 
                onReadMore={showAnimalDetails} 
              />
            } />
            <Route path="/mammals" element={
              <Mammals 
                animals={animals.filter(animal => animal.group === 'mammal')} 
                onAnimalClick={showAnimalDetails} 
              />
            } />
            <Route path="/birds" element={
              <Birds 
                animals={animals.filter(animal => animal.group === 'bird')} 
                onAnimalClick={showAnimalDetails} 
              />
            } />
            <Route path="/reptiles" element={
              <Reptiles 
                animals={animals.filter(animal => animal.group === 'reptile')} 
                onAnimalClick={showAnimalDetails} 
              />
            } />
          </Routes>
        </div>
        {showDetails && selectedAnimal && (
          <AnimalDetails animal={selectedAnimal} onClose={closeAnimalDetails} />
        )}
        <Footer />
      </div>
    </Router>
  );
};

export default App;