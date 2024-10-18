

import './App.css'

function App() {


  return (
    <>
    {/* top level app which renders two headers  */}
    <Header title="demo"></Header>
    <Header title="demo2"></Header>
    </>
  )
}



// header component it will take title as an input 
// eslint-disable-next-line react/prop-types
function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
