import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-message">
      <img src="/Animal-images/animals.jpeg" alt="Australia Zoo Logo" className="zoo-logo"  />
      <h2>Welcome to this Australian Animals Exhibition!</h2>
        
      <p>
        Click on a animal name from the sidebar, to find more about information about them.
        You can also navigate to specefi animal groups using the menu above.
      </p>
      <p>
        Don't miss the chance to see these incredible animals in CME park side.
        
      </p>
    </div>
  );
};

export default Welcome;
