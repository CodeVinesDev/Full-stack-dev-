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
import { useRecoilValue } from "recoil";
import { jobs, message, network, notification } from "./store/linkdin";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

export default App;

function Counter() {
  const notificationCount = useRecoilValue(notification);
  const jobCount = useRecoilValue(jobs);
  const networkCount = useRecoilValue(network);
  const messagesCount = useRecoilValue(message);

  return (
    <div
      className="flex gap-2"
      style={{ display: "flex", gap: "12px" }}
      key={1}
    >
      <button>Home</button>
      <button>
        Notification ({notificationCount >= 100 ? "99+" : notificationCount}){" "}
      </button>
      <button>Messages ({messagesCount})</button>{" "}
      <button>Jobs ({jobCount})</button>
      <button>Network ({networkCount})</button>
    </div>
  );
}
