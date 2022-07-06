//Library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Screen or Layout Web
import { 
  Login, 
  Dashboard, 
  User, 
  Review, 
  Office, 
  OfficeAvailable, 
  OfficeList, 
  OfficeBooked, 
  OfficeHistory, 
  Chat,
  AddOffice,
  BookOffice 
} from "./screens";


//Component
import { DashboardLayout } from "./components";

function App() {
  return (
    <div className="bg-[#F1F1F1] min-h-screen">
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/User" element={<User />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/Office" element={<Office />}>
              <Route index path="/Office/available-office" element={<OfficeAvailable />} />
              <Route path="/Office/booked-office" element={<OfficeBooked />} />
              <Route path="/Office/office-list" element={<OfficeList />} />
              <Route path="/Office/history-office" element={<OfficeHistory />} />
            </Route>
            <Route path="/Office/office-list/add-office" element={<AddOffice />} />
            <Route path="/Office/available-office/book-office" element={<BookOffice />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div className="flex flex-col h-screen">
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
