// // Import the Notifications component
// import Notifications from "./Notifications";

// // Create a function component named App that will be rendered in the root element
// function App() {
//   // return JSX that will be rendered
//   return (
//     // Create a div element
//     <div>
//       {/* Add a heading */}
//       <h1>Linkedin Notifications Count</h1>

//       {/* Render the Notifications component */}
//       <Notifications />
//     </div>
//   );
// }

// // Export the App component to use it in the other files
// export default App;
import { ThemeContext, ContextProvide } from "./context/Theme";
import { useContext } from "react";

const App = () => {
  return (
    <ContextProvide>
      <Content />
    </ContextProvide>
  );
};

export default App;

const Content = () => {
  const { theme, settheme } = useContext(ThemeContext);

  return (
    <div>
      <h1
        style={{
          color: theme === "dark" ? "white" : "black",
          backgroundColor: theme === "dark" ? "black" : "white",
          padding: "10px",
        }}
      >
        Current theme: {theme}
      </h1>
      <button onClick={() => settheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
};
