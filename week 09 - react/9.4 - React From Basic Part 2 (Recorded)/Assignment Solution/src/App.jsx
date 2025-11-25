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
// import { ThemeContext, ContextProvide } from "./context/Theme";
// import { useContext } from "react";

// const App = () => {
//   return (
//     <ContextProvide>
//       <Content />
//     </ContextProvide>
//   );
// };

// export default App;

// const Content = () => {
//   const { theme, settheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <h1
//         style={{
//           color: theme === "dark" ? "white" : "black",
//           backgroundColor: theme === "dark" ? "black" : "white",
//           padding: "10px",
//         }}
//       >
//         Current theme: {theme}
//       </h1>
//       <button onClick={() => settheme(theme === "light" ? "dark" : "light")}>
//         Change Theme
//       </button>
//     </div>
//   );
// };
// import { useContext, useState } from "react";
// import { AuthContext, AuthProvider } from "./context/Auth";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Login />
//       <Users />
//     </AuthProvider>
//   );
// };

// export default App;

// const Users = () => {
//   const { user } = useContext(AuthContext);
//   return <h1>{user ? `Welcome ${user}` : "No user logged in"}</h1>;
// };

// const Login = () => {
//   const { user, login, logout } = useContext(AuthContext);
//   const [host, sethost] = useState("");

//   const handleLogin = () => {
//     if (host.trim() !== "") login(host.trim());
//   };

//   return (
//     <div style={{ margin: "10px 0" }}>
//       {user === "" && (
//         <>
//           <input
//             type="text"
//             value={host}
//             onChange={(e) => sethost(e.target.value)}
//             style={{ border: "2px solid red", marginRight: "5px" }}
//             placeholder="Enter username"
//           />
//           <button onClick={handleLogin}>Login</button>
//         </>
//       )}

//       <button onClick={() => logout()} style={{ marginLeft: "5px" }}>
//         Logout
//       </button>
//     </div>
//   );
// };

import useFetch from "./hook/data";
const App = () => {
  const { data, error, laoding } = useFetch();
  console.log("data", data);
  console.log("loadimng", laoding);
  console.log("error", error);

  return <h1>{data.title}</h1>;
};

export default App;
