import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import GroupInfo from '../components/GroupInfo';
import AnimalSummary from '../components/AnimalSummary';

const Mammals = ({ animals, onAnimalClick }) => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
  };

  return (
    <div className="page-container">
      <Sidebar 
        animals={animals} 
        onAnimalClick={handleAnimalClick} 
        activeAnimal={selectedAnimal} 
      />
      <main className="main-content">
        {selectedAnimal ? (
          <div className="full-summary">
            <h2>{selectedAnimal.name}</h2>
            <div className="full-summary-content">
              <div className="full-summary-text">
                <p><strong>Description:</strong> {selectedAnimal.description}</p>
                <p><strong>Diet:</strong> {selectedAnimal.diet}</p>
                <p><strong>Lifespan:</strong> {selectedAnimal.lifespan}</p>
                <button className="read-more-btn" onClick={() => onAnimalClick(selectedAnimal)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ) : (
          <GroupInfo group="mammal" />
        )}
      </main>
    </div>
  );
};

export default Mammals;