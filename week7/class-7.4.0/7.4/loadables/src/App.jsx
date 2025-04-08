
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({ id }) {
  //useRecoilStateLoadable: this returns if the state is resolved or not 
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  // const [todos, setTodos] = useRecoilValueLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>loading...</div>
  } else if (todo.state === "hasError") {
    return <>
      Error while getting the data
    </>
  }

  return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App
