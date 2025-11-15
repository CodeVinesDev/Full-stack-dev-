// // Import the useState hook from react
// import { useState } from "react";

// // Create a functional component called App
// function App() {
//   return (
//     <div>
//       <h1>React Hooks</h1>

//       {/* Render the Counter component */}
//       <Counter />
//     </div>
//   );
// }

// // Create a functional component called Counter
// function Counter() {
//   // Create a state variable called count and a function to update it called setCount
//   const [count, setCount] = useState(0);

//   // function to increase the count by 1
//   function increaseCount() {
//     // Increment the count state variable by 1
//     setCount(count + 1);
//   }

//   // function to decrease the count by 1
//   function decreaseCount() {
//     // Decrement the count state variable by 1
//     setCount(count - 1);
//   }

//   // function to reset the count to 0
//   function resetCount() {
//     // Update the count state variable to 0
//     setCount(0);
//   }

//   // Render the count and a button to increase the count
//   return (
//     <div>
//       {/* Display the count state variable */}
//       <h1>count:{count}</h1>
//       {/* Call the increaseCount function when the button is clicked */}
//       <button onClick={increaseCount}>Increase Count</button>

//       {/* Call the decreaseCount function when the button is clicked */}
//       <button onClick={decreaseCount}>Decrease Count</button>
//       {/* Call the resetCount function when the button is clicked */}
//       <button onClick={resetCount}>Reset Count</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// const App = () => {
//   // Initialize state with the value from localStorage, or default to 0 if not found
//   const [value, setVALur] = useState(() => {
//     const saved = Number(localStorage.getItem("value"));
//     return saved ? saved : 0;
//   });

//   const add = () => {
//     setVALur((prev) => prev + 1);
//   };

//   const minus = () => {
//     setVALur((prev) => prev - 1);
//   };

//   // Sync localStorage with the current value whenever it changes
//   useEffect(() => {
//     localStorage.setItem("value", value);
//   }, [value]); // <-- Here we pass the value inside an array!

//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={add}>Add</button>
//       <button onClick={minus}>Minus</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { useEffect } from "react";
// const [data, setdata] = useState([]);
// const [loading, setloding] = useState(false);

// const App = () => {
//   useEffect(() => {
//     setloding(true);
//     try {
//       const fetch = () => {
//         const res = fetch("");
//         const data = res.json();
//         setdata(data);
//       };
//     } catch (error) {
//       setloding(false);
//       console.log("err", error);
//     }

//     fetch();
//   }, []);
//   console.log("data", data);

//   return (
//     <div>
//       <h1>
//         {data.map((data) => {
//           return data;
//         })}
//       </h1>
//     </div>
//   );
// };

// export default App;
