//React returns, React re-rendering, key, wrapper components, useEffect, useMemo, useCallback, useRef
// wrapper components 
import React, { useState } from 'react'


function App() {
      <CardWrapper innerComponent={<TextComponent></TextComponent>}></CardWrapper>
}

function TextComponent(){
  return <div>
      hi there
  </div>
}

// eslint-disable-next-line react/prop-types
function CardWrapper({innerComponent}){
  //create a div which has a border 
  //and inside the div, renders the prop
  
  return <div style={{border:"2px solid black", width:"20px", height:"20px"}}>
        {innerComponent}
  </div>
}



export default App
