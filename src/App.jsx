import "./App.css";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidemenu/sidemenu";
import Dashboard from "./pages/Dashboard/DashBoard";
import Users from "./pages/Users/Users";
import Settings from "./pages/Settings/Settings";
import Reports from "./pages/Reports/Reports";
import ApprovalList from "./pages/Approval_List/approval_list";
import UserAnswerCounts from "./pages/UserAnswerCounts/userAnswerCounts";
import Advertisement from "./pages/Advertisements/advertisement";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/approvallist" element={<ApprovalList />} />
              <Route path="/useranswercounts" element={<UserAnswerCounts />} />
              <Route path="/advertisement" element={<Advertisement />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
