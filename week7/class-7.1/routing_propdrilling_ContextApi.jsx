// Routing
// - Single page application: react let's you create single page app
// - Client side bundle
// - client side routing: the code that u write

// routes
// we have react-router-dom
// this library help for client side routing 

// basic routing 
function App() {
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashborad></Dashborad>}></Route>
            <Route path="/" element={<Landing></Landing>}></Route>
        </Routes>

    </BrowserRouter>
}
