import React from "react";
import { NavLink } from "react-router-dom";
import "./sidemenu.css"; // Custom styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <NavLink to="/dashboard" className="sidebar-link">
          <span className="active-indicator"></span> Dashboard
        </NavLink>
        <NavLink to="/users" className="sidebar-link">
          <span className="active-indicator"></span> Users
        </NavLink>
        <NavLink to="/settings" className="sidebar-link">
          <span className="active-indicator"></span> Settings
        </NavLink>
        <NavLink to="/reports" className="sidebar-link">
          <span className="active-indicator"></span> Reports
        </NavLink>
        <NavLink to="/approvallist" className="sidebar-link">
          <span className="active-indicator"></span> Approval List
        </NavLink>
        <NavLink to="/useranswercounts" className="sidebar-link">
          <span className="active-indicator"></span> User Answer Counts
        </NavLink>
        <NavLink to="/advertisement" className="sidebar-link">
          <span className="active-indicator"></span> Advertisement
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
