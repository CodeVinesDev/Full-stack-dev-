// Import useState and useEffect hooks from React module
import { useState, useEffect } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
  // Return the JSX that will be rendered in the browser
  return (
    // Create a div element with JSX
    <div>
      {/* Render MyComponent inside App component */}
      <MyComponent />
    </div>
  );
}

// Export the App component as the default export to be used in other files or components
export default App;
