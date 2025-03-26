import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./utils/ProtectedRoute";
import NavBar from "./components/navbar/navbar";
import Sidebar from "./components/sidemenu/sidemenu";
import Login from "./pages/LoginPage/loginpage";
import Dashboard from "./pages/DashBoard/DashBoard";
import TenthDashboard from "./pages/DashBoard/10th_dashboard";
import EleventhDashboard from "./pages/DashBoard/11th_dashboard";
import TwelfthDashboard from "./pages/DashBoard/12th_dashboard";
import TenthStandard from "./pages/Standards/10th_standard";
import EleventhStandard from "./pages/Standards/11th_standard";
import TwelfthStandard from "./pages/Standards/12th_standard";
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
import MediumPriceManagement from "./pages/MediumPrice/mediumPriceManagement";

// Protected Routes Array
const appRoutes = [
  { path: "/10dashboard", element: <TenthDashboard /> },
  { path: "/11dashboard", element: <EleventhDashboard /> },
  { path: "/12dashboard", element: <TwelfthDashboard /> },
  { path: "/admins", element: <Admins /> },
  { path: "/10standard", element: <TenthStandard /> },
  { path: "/11standard", element: <EleventhStandard /> },
  { path: "/12standard", element: <TwelfthStandard /> },
  { path: "/mediumlist", element: <MediumPriceManagement /> },
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
  const { token, logout } = useContext(AuthContext); // Ensure token is from AuthContext
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    setIsAuthenticated(!!token);

    const handleBeforeUnload = () => {
      logout();
      localStorage.removeItem("token");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [token, logout]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {!isAuthenticated && (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}

        {isAuthenticated && (
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <NavBar />
                <div className="app-container">
                  <Sidebar className="sidebar" />
                  <div className="main-content">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      {appRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                      ))}
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
