// what is lazy loading 
// the way we have written the code complete bundle comes back
// even is the person only coming for landing page
// then we do not need to give all pages to them 
// for example if we have 20 pages for website 
// we will give them in small bundles 
// we will make sure when the person is at page one 
// they will slowly get data for page one then for page two and so on 
import React from 'react'
import { BrowserRouter, Routes } from "react-router-dom";
import { Landing } from "./Landing";
const Dashboard = React.lazy(() => import("./Dashboard"));
//this will slowly import dashboard 

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/" element={<Landing></Landing>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;