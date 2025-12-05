// Import useState hook from react module
import { useState } from "react";

// Custom Hook - useCounter
// Create a custom hook called useCounter
function useCounter() {
  // Create a state variable called count and a function to update it called setCount to manage the state of the count variable
  const [count, setCount] = useState(0);

  // function to increase the count by 1
  function increaseCount() {
    // Increment the count state variable by 1
    setCount(count + 1);
  }

  // Return the count and increaseCount function to be used in other components
  return { count, increaseCount };
}

// Export the App component as the default export from this module
export default App;
