import React from 'react';

const AnimalDetails = ({ animal, onClose }) => {
  return (
    <div className="animal-details-overlay">
      <div className="animal-details">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{animal.name}</h2>
        <div className="details-content">
          <img src={animal.image} alt={animal.name} className="animal-image" />
          <div className="details-info">
            <p><strong>Description:</strong> {animal.description}</p>
            <p><strong>Group:</strong> {animal.group}</p>
            <p><strong>Diet:</strong> {animal.diet}</p>
            <p><strong>Lifespan:</strong> {animal.lifespan}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;