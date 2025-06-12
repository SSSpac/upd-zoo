import React from 'react';

const Sidebar = ({ animals, onAnimalClick, activeAnimal }) => {
  return (
    <aside className="sidebar">
      <h3>Animals</h3>
      <ul>
        {animals.map(animal => (
          <li 
            key={animal.id} 
            className={activeAnimal && activeAnimal.id === animal.id ? 'active' : ''}
            onClick={() => onAnimalClick(animal)}
          >
            {animal.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;