// Import the ErrorBoundary component for error handling in the App component.
import ErrorBoundary from "./ErrorBoundary";

// Create a function component named App that will be rendered in the root element
const App = () => {
  // Return the JSX that will be rendered in the browser
  return (
    // Create a div element with JSX
    <div>
      {/* Wrap Card1 in ErrorBoundary to catch any potential rendering errors. */}
      <ErrorBoundary>
        <Card1 /> {/* Renders Card1 component. */}
      </ErrorBoundary>
      {/* Similarly, wrap Card2 to ensure any errors are caught. */}
      <ErrorBoundary>
        <Card2 /> {/* Renders Card2 component. */}
      </ErrorBoundary>
      {/* Card3 is not wrapped in ErrorBoundary, so errors will not be caught by the boundary. */}
      <Card3 /> {/* Renders Card3 component. */}
    </div>
  );
};

// Exporting the main App component for use in the application.
export default App;
