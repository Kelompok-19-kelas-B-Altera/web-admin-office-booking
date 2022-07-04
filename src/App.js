//Library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Screen or Layout Web
import { Login, Dashboard, User } from "./screens";

//Component
import { DashboardLayout, TestPage } from "./components"

function App() {
  return (
    <div className="bg-[#F1F1F1] min-h-screen">
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route index path="/:title" element={<TestPage />} />
            <Route index path="/User" element={<User />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div className="flex h-screen">
                <p className="m-auto">There's nothing here: 404!</p>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
