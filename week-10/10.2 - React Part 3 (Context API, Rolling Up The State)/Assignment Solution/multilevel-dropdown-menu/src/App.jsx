// import { CounterContext, CounterProvider } from "./context/Counter";
// import { useContext } from "react";
// function App() {
//   return (
//     <>
//       <CounterProvider>
//         <Display />
//       </CounterProvider>
//     </>
//   );
// }

// export default App;

// const Display = () => {
//   const { minus, plus, counter } = useContext(CounterContext);
//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={plus}>add </button>
//       <button onClick={minus}> decresss</button>
//     </>
//   );
// };

//   recoil

// import { useRecoilValue, useSetRecoilState } from "recoil";
// import { Counter } from "./store/Counter";

// const Display = () => {
//   const counter = useRecoilValue(Counter);
//   const setCounter = useSetRecoilState(Counter);

//   return (
//     <>
//       <h1>{counter}</h1>

//       <button onClick={() => setCounter((prev) => prev + 1)}>add</button>

//       <button onClick={() => setCounter((prev) => prev - 1)}>decrease</button>
//     </>
//   );
// };

// export default Display;

import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}
export default App;
function Counter() {
  return (
    <>
      <div className="flex gap-2" style={{ display: "flex", gap: "12px" }}>
        <button>home</button>
        <button>notfiaction ()</button>
        <button>messsage()</button>
        <button>jobs()</button>
        <button>network()</button>
      </div>
    </>
  );
}
