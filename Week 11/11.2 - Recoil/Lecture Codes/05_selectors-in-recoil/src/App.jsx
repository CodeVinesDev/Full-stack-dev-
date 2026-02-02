// Importing counterAtom and evenSelector from the store module
import { counterAtom, evenSelector } from "./store/counter";

// Importing necessary functions from Recoil for state management
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// Main App component that serves as the entry point for the application
function App() {
    return (
        <div>
            {/* Wrapping the application in RecoilRoot to provide Recoil state management */}
            <RecoilRoot>
                {/* Rendering the Buttons, Counter, and IsEven components */}
                <Buttons /> 
                <Counter /> 
                <IsEven /> 
            </RecoilRoot>
        </div>
    );
}



// Exporting the App component as the default export to make it available in other parts of the application
export default App;
