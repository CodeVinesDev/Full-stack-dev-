import { CounterContext, CounterProvider } from "./context/Counter";
import { useContext } from "react";
function App() {
  return (
    <>
      <CounterProvider>
        <Display />
      </CounterProvider>
    </>
  );
}

export default App;

const Display = () => {
  const { minus, plus, counter } = useContext(CounterContext);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={plus}>add </button>
      <button onClick={minus}> decresss</button>
    </>
  );
};
