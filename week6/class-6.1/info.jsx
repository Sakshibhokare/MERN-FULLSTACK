//vvvIMP: 
//A component can only return a single top level xml
// why? 
// 1. Makes it easy to reconciliation 

function App() {
    return (
        // in div we can call header multiple times, parent element is always required 
        <div> 
            <Header tittle="something"></Header>
            <Header tittle="something"></Header>
        </div>


    )
}

function Header({ title }) {
    return <div>
        {title}
    </div>
}

export default App