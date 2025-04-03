// Will remove all states and context logic 
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { CountContext } from "./context";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <>
      <CountRerender />
      <Buttons />
    </>
  );
}

function CountRerender() {
  // this component only need the value not updating any thing 
  const count = useRecoilValue(countAtom);
  return <>{count}</>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

export default App;
