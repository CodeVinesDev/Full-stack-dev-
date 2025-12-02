// Import useState hook from react
import { useState } from "react";

// Create a function component named App that serves as the main application component
function App() {
  // Return the JSX for the component
  return (
    // Wrap the Parent component inside a div
    <div>
      {/* Render the Parent component */}
      <Parent />
    </div>
  );
}

// Export the App component as the default export to be used in other files or components
export default App;
