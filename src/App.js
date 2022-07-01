//Library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Screen or Layout Web
import { Login } from "./screens";

//Component
import { TestComp } from "./components"

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<TestComp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<div className="flex h-screen"><p className="m-auto">There's nothing here: 404!</p></div>}/>
        </Routes>
      </Router>
  );
}

export default App;
