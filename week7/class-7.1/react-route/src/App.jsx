// import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {
  const navigate = useNavigate();
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
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/" element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
