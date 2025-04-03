// Will remove all states and context logic 
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { CountContext } from "./context";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count></Count>
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
  return <>
    <b>
      {count}
    </b>
    <Eventext></Eventext>
  </>;
}

function Buttons() {
  // we only need setCount here 
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </>
  );
}

function Eventext() {
  //we have concept of selector
  const count = useRecoilValue(countAtom)
  // return <>
  //   {(count % 2 == 0) ? "It is even" : null}
  // </>
  if (count % 2 == 0) {
    return <>
      <div>It is even </div>
    </>
  } else {
    return <>
    </>
  }
}

export default App;
