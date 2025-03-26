import React, { useState } from "react";
import NotificationForm from "./Components/notificationForm";
import NotificationList from "./Components/notificationList";
import FilterPanel from "./Components/filterPanel";
import "./styles.css";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  const handleSendNotification = (newNotification) => {
    setNotifications((prev) => [newNotification, ...prev]);
  };

  return (
    <div className="notification-container">
      <h1 className="page-title">Notification Management</h1>
      <div className="notification-layout">
        <div className="left-panel">
          <NotificationForm onSend={handleSendNotification} />
          <FilterPanel />
        </div>
        <div className="right-panel">
          <NotificationList notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
