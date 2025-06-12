import React from 'react';
import { Link } from 'react-router-dom';

const AnimalSummary = ({ animal, onReadMore }) => {
  const shortDescription = animal.description.length > 200 
    ? `${animal.description.substring(0, 200)}...` 
    : animal.description;

  return (
    <div className="animal-summary">
      <h2>{animal.name}</h2>
      <div className="summary-content">
        <img src={animal.image} alt={animal.name} className="animal-thumbnail" />
        <div className="summary-text">
          <p>{shortDescription}</p>
          <p><strong>Diet:</strong> {animal.diet}</p>
          <p>
            <strong>Group:</strong> 
            <Link to={`/${animal.group}s`} className="group-link"> {animal.group}</Link>
          </p>
          <button className="read-more-btn" onClick={() => onReadMore(animal)}>
            Read More her
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalSummary;
