// Import useState hook from react
import { useState } from "react";

// Create a function component named App that serves as the main application component
function App() {
  // Return the JSX for the component
  return (
    // Wrap the LightBulb component inside a div
    <div>
      {/* Render the LightBulb component */}
      <LightBulb />
    </div>
  );
}

// Create a function component named ToggleBulbState to toggle the state of the bulb
function ToggleBulbState({ bulbOn, setBulbOn }) {
  // Function to toggle the state of the bulb
  function toggleBulb() {
    // Update the state of the bulb using the setBulbOn function
    // setBulbOn((currentState) => !currentState);

    // Update the state of the bulb using the setBulbOn function
    setBulbOn(!bulbOn);
  }

  // Return the JSX for the component
  return (
    // Button to toggle the state of the bulb on click
    <div>
      {/* Add an onClick event listener to the button that calls the toggleBulb function */}
      <button onClick={toggleBulb}>Toggle the Bulb</button>
    </div>
  );
}

// Export the App component as the default export to be used in other files or components
export default App;
