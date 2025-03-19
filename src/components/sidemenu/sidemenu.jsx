import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCheck,
  Key,
  CreditCard,
  MessageSquare,
  FileText,
  Bell,
  Megaphone,
  HelpCircle,
  ListChecks,
  CheckCircle,
} from "lucide-react"; // Modern Icons
import "./sidemenu.css"; // External CSS file

const Sidebar = () => {
  const links = [
    { to: "/10dashboard", label: "10th", icon: <LayoutDashboard /> },
    { to: "/11dashboard", label: "11th", icon: <LayoutDashboard /> },
    { to: "/12dashboard", label: "12th", icon: <LayoutDashboard /> },
    { to: "/admins", label: "Admins", icon: <UserCheck /> },
    { to: "/10standard", label: "10th Std", icon: <BookOpen /> },
    { to: "/11standard", label: "11th Std", icon: <BookOpen /> },
    { to: "/12standard", label: "12th Std", icon: <BookOpen /> },
    { to: "/users", label: "Users", icon: <Users /> },
    { to: "/keys", label: "Keys", icon: <Key /> },
    { to: "/paymentdetails", label: "Payments", icon: <CreditCard /> },
    { to: "/feedback", label: "Feedback", icon: <MessageSquare /> },
    { to: "/pdf", label: "PDF", icon: <FileText /> },
    { to: "/pushnotifications", label: "Notifications", icon: <Bell /> },
    { to: "/advertisement", label: "Ads", icon: <Megaphone /> },
    { to: "/userdoubt", label: "Doubts", icon: <HelpCircle /> },
    { to: "/useranswercounts", label: "Answers", icon: <ListChecks /> },
    { to: "/approvallist", label: "Approval", icon: <CheckCircle /> },
  ];

  return (
    <div className="sidebar">
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="icon">{link.icon}</span>
            <span className="label">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
