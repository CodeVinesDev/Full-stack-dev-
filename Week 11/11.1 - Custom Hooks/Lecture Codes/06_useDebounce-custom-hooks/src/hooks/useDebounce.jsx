// Import the useEffect and useState hooks from the react module
import { useState, useEffect } from 'react';






// // Import the useEffect and useRef hooks from the react module
// import { useEffect, useRef } from "react"

// // Create a custom hook named useDebounce that takes an originalFn function as an argument
// function useDebounce(originalFn) {
//     // Create a ref variable named currentClock and set it to the return value of the useRef hook
//     const currentClock = useRef();

//     // Create a function named fn that clears the current timeout and sets a new timeout to call the originalFn function after 1 second
//     const fn = () => {
//         clearTimeout(currentClock.current);
//         currentClock.current = setTimeout(originalFn, 1000);
//     }

//     // Create a side effect that clears the current timeout when the component unmounts
//     useEffect(() => {
//         fn();
//     }, []);

//     // Return the fn function from the hook
//     return fn;
// }

// // Export the useDebounce custom hook as the default export from this module
// export default useDebounce;