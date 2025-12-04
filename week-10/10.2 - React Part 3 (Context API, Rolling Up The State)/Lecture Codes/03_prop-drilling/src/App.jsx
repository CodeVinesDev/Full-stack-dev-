// Import the useState hook from the React library, which is used for managing state in functional components
import { useState } from "react";

// Create a function component named App, which serves as the main entry point of the application
function App() {
  // Declare a state variable 'bulbOn' initialized to true, and a state updater function 'setBulbOn' to toggle the state
  const [bulbOn, setBulbOn] = useState(true);

  // Define a function named toggleBulb to invert the value of 'bulbOn'
  function toggleBulb() {
    // Update the 'bulbOn' state by setting it to the opposite of its current value (on becomes off, and vice versa)
    setBulbOn(!bulbOn);
  }

  // Return JSX to render the components within a div element
  return (
    <div>
      {/* Render the Light component, passing 'bulbOn' and 'toggleBulb' as props */}
      <Light bulbOn={bulbOn} toggleBulb={toggleBulb} />
    </div>
  );
}

// Define the LightSwitch component that accepts 'toggleBulb' as a prop
function LightSwitch({ toggleBulb }) {
  // Return JSX to display a button, which when clicked, triggers the 'toggleBulb' function to toggle the bulb state
  return (
    <div>
      {/* Add an onClick event listener to the button that calls 'toggleBulb' when the button is clicked */}
      <button onClick={toggleBulb}>Toggle the Bulb</button>
    </div>
  );
}

// Export the App component as the default export so it can be imported and used in other files
export default App;
