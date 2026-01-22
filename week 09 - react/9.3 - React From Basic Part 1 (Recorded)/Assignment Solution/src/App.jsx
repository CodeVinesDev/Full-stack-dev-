// import PostComponent from "./PostComponent";
// import ProfileComponent from "./ProfileComponent";

// // Create a function component named App that will be rendered in the root element
// function App() {
//   // return JSX that will be rendered
//   return (
//     // Apply inline styles to the div element
//     <div style={{ backgroundColor: "#dfe6e9", minHeight: "100vh" }}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div>
//           <PostComponent />
//           <ProfileComponent />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Export App Component to use it in other components
// export default App;

import { useEffect, useState } from "react";

function App() {
  const [not, setNot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("run");
      setNot((prev) => prev + 1);
    }, 1000);

    console.log("useEffect run");

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>NOTIFICATIONS</h1>

      <div
        style={{
          background: "red",
          width: "30px",
          height: "30px",
          borderRadius: "100px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>{not}</span>
      </div>
    </>
  );
}

export default App;
