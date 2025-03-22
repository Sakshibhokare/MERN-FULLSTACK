// import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import { Dashboard } from './components/Dashboard';
// import { Landing } from './components/Landing';
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"))
function App() {

  return (
    <div>
      {/* if want something to stay on every route  */}
      <div style={{ backgroundColor: 'black', color: "white" }}>
        Hi this is the topbar
      </div>
      {/* using this method will always reload the page  */}
      {/* <button onClick={() => {
        window.location.href = "/"
      }}>
        Landing page
      </button>

      {/* location will give you the current url + href value you did provide  */}
      {/* <button onClick={() => {
        window.location.href = "/dashboard"
      }}>
        Dashboard
      </button> */}


      {/* to change page without reloading will use a hook useNavigate 
        */}

      {/* vvvimp
you can not use navigate outside the browserRouter */}

      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/" element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

//this will help to not reload the page while changing the page
function Appbar() {
  const navigate = useNavigate();
  return <>
    <button onClick={() => {
      navigate("/")
    }}>
      Landing page
    </button>

    <button onClick={() => {
      navigate("/dashboard")
    }}>
      Dashboard page
    </button>
  </>

}

export default App
