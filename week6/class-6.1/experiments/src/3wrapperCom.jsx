// wrapper components means : a components takes
// another component as an input

// suppose we create a card wrapper in which will take component as a prop

// function CardWrapper({ innerComponent }) {
//     return <div>{innerComponent}</div>
// }

// function TextComponent() {
//     return <div>
//         hi there
//     </div>
// }

// function App(){
//     return <>
//     <CardWrapper innerComponent={<TextComponent></TextComponent>}
//     </>
// }