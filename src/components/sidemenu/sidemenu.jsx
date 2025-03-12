import React from "react";
import { NavLink } from "react-router-dom";
import "./sidemenu.css";

const Sidebar = () => {
  const links = [
    { to: "/10dashboard", label: "10th Dashboard" },
    { to: "/11dashboard", label: "11th Dashboard" },
    { to: "/12dashboard", label: "12th Dashboard" },
    { to: "/admins", label: "Admins" },
    { to: "/10standard", label: "10th Standard" },
    { to: "/11standard", label: "11th Standard" },
    { to: "/12standard", label: "12th Standard" },
    { to: "/users", label: "Users" },
    { to: "/keys", label: "Keys" },
    { to: "/paymentdetails", label: "Payment Details" },
    { to: "/feedback", label: "Feedback" },
    { to: "/pdf", label: "PDF" },
    { to: "/pushnotifications", label: "Push Notifications" },
    { to: "/advertisement", label: "Advertisement" },
    { to: "/userdoubt", label: "User Doubt" },
    { to: "/useranswercounts", label: "User Answer Counts" },
    { to: "/approvallist", label: "Approval List" },
  ];

  return (
    <div className="sidebar">
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="sidebar-link"
            activeClassName="active" // Highlights the active link
          >
            <span className="active-indicator"></span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
