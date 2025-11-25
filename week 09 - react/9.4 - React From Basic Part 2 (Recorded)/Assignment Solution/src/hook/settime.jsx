// import { useEffect, useRef } from "react";

// const useInterval = (callback, delay) => {
//   const savedCallback = useRef();

//   // 1️⃣ Remember the latest callback
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // 2️⃣ Set up the interval
//   useEffect(() => {
//     if (delay === null) return; // pause if delay is null

//     const tick = () => savedCallback.current();
//     const id = setInterval(tick, delay);

//     return () => clearInterval(id); // cleanup on unmount or delay change
//   }, [delay]);
// };

// export default useInterval;

import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);

  const toggleChange = () => setToggle((prev) => !prev);

  return { toggle, toggleChange };
};

export default useToggle;
