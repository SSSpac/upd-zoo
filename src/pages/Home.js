import React from 'react';
import Sidebar from '../components/Sidebar';
import Welcome from '../components/Welcome.js';
import AnimalSummary from '../components/AnimalSummary';

const Home = ({ animals, selectedAnimal, onAnimalClick, onReadMore }) => {
  return (
    <div className="page-container">
      <Sidebar 
        animals={animals} 
        onAnimalClick={onAnimalClick} 
        activeAnimal={selectedAnimal} 
      />
      <main className="main-content">
        {selectedAnimal ? (
          <AnimalSummary 
            animal={selectedAnimal} 
            onReadMore={onReadMore} 
          />
        ) : (
          <Welcome />
        )}
      </main>
    </div>
  );
};

export default Home;
