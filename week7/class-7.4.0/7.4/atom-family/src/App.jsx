
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

//create a dynamic atom for every todo
//if id is same then render the same atom 
function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({ id }) {
  // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  const currentTodo = useRecoilValue(todosAtomFamily(id))
  return (
    <>
      {currentTodo.title}
      <br></br>
      {currentTodo.description}
      <br />
    </>
  )
}

export default App
