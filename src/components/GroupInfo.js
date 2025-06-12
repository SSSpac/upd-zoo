import React from 'react';

const GroupInfo = ({ group }) => {
  const groupInfo = {
    mammal: {
      title: "Australian Mammals",
      description: "They say Australia has fercoious mammals, but not as big and dangerous as the animals in Africa :)",
    },
    bird: {
      title: "Australian Birds",
      description: "The birds of Australia are fast and fly in groupds.",
    },
    reptile: {
      title: "Australian Reptiles",
      description: " Reptiles  are poisinous, creepy and should not be pets",
    }
  };

  const info = groupInfo[group];

  return (
    <div className="group-info">
      <h2>{info.title}</h2>
      <p >{info.description}</p>
      <p>Click on an animal in the sidebar to learn more about the specie.</p>
    </div>
  );
};

export default GroupInfo;