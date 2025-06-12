import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Birds from './pages/Birds';
import Mammals from './pages/Mammals';
import Reptiles from './pages/Reptiles';
import AnimalDetails from './components/AnimalDetails';
import { animals } from './data/animals';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

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
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
            <Home 
              animals={animals} 
              selectedAnimal={selectedAnimal} 
              onAnimalClick={handleAnimalClick} 
              onReadMore={showAnimalDetails} 
            />
          } />
          <Route path="mammals" element={
            <Mammals 
              animals={animals.filter(animal => animal.group === 'mammal')} 
              onAnimalClick={showAnimalDetails} 
            />
          } />
          <Route path="birds" element={
            <Birds 
              animals={animals.filter(animal => animal.group === 'bird')} 
              onAnimalClick={showAnimalDetails} 
            />
          } />
          <Route path="reptiles" element={
            <Reptiles 
              animals={animals.filter(animal => animal.group === 'reptile')} 
              onAnimalClick={showAnimalDetails} 
            />
          } />
        </Route>
      </Routes>
      {showDetails && selectedAnimal && (
        <AnimalDetails animal={selectedAnimal} onClose={closeAnimalDetails} />
      )}
    </Router>
  );
};

export default App;