import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {

  return (
    <div>
      {/* if want something to stay on every route  */}
      <div style={{ backgroundColor: 'black', color: "white" }}>
        Hi this is the topbar
      </div>
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
