import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/navbar/navbar";
import Sidebar from "./components/sidemenu/sidemenu";

// Dashboard Pages
import Dashboard from "./pages/DashBoard/DashBoard";
import TenthDashboard from "./pages/DashBoard/10th_dashboard";
import EleventhDashboard from "./pages/DashBoard/11th_dashboard";
import TwelfthDashboard from "./pages/DashBoard/12th_dashboard";

// Standard Pages
import TenthStandard from "./pages/Standards/10th_standard";
import EleventhStandard from "./pages/Standards/11th_standard";
import TwelfthStandard from "./pages/Standards/12th_standard";

// Other Pages
import Admins from "./pages/Admins/admins";
import Users from "./pages/Users/Users";
import Keys from "./pages/Keys/keys";
import PaymentDetails from "./pages/PaymentDetails/payment_details";
import Feedback from "./pages/Feedback/feedback";
import MyDocument from "./pages/Pdf/pdf";
import PushNotifications from "./pages/PushNotifications/push_notifications";
import Advertisement from "./pages/Advertisements/advertisement";
import UserDoubts from "./pages/UserDoubts/user_doubts";
import UserAnswerCounts from "./pages/UserAnswerCounts/userAnswerCounts";
import ApprovalList from "./pages/Approval_List/approval_list";

// Route Configurations
const appRoutes = [
  { path: "/", element: <Dashboard /> },
  { path: "/10dashboard", element: <TenthDashboard /> },
  { path: "/11dashboard", element: <EleventhDashboard /> },
  { path: "/12dashboard", element: <TwelfthDashboard /> },
  { path: "/admins", element: <Admins /> },
  { path: "/10standard", element: <TenthStandard /> },
  { path: "/11standard", element: <EleventhStandard /> },
  { path: "/12standard", element: <TwelfthStandard /> },
  { path: "/users", element: <Users /> },
  { path: "/keys", element: <Keys /> },
  { path: "/paymentdetails", element: <PaymentDetails /> },
  { path: "/feedback", element: <Feedback /> },
  { path: "/pdf", element: <MyDocument /> },
  { path: "/pushnotifications", element: <PushNotifications /> },
  { path: "/advertisement", element: <Advertisement /> },
  { path: "/userdoubt", element: <UserDoubts /> },
  { path: "/useranswercounts", element: <UserAnswerCounts /> },
  { path: "/approvallist", element: <ApprovalList /> },
];

function App() {
  return (
    <Router>
      <NavBar />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            <Routes>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
