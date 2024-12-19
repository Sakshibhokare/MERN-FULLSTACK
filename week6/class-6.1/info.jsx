//vvvIMP: 
//A component can only return a single top level xml
// why? 
// 1. Makes it easy to reconciliation 

function App(){
    return(
        <Header tittle="something"></Header>
        // <Header tittle="something"></Header>

    )
}

function Header({title}){
    return <div>
        {title}
    </div>
}

export default App