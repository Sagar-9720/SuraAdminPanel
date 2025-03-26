import React from "react";

const NotificationList = ({ notifications }) => {
  return (
    <div className="notification-list">
      <h2>Recent Notifications</h2>
      {notifications.length === 0 ? (
        <p className="empty-message">No notifications sent yet.</p>
      ) : (
        notifications.map((notif, index) => (
          <div key={index} className="notification-item">
            <h3>{notif.title}</h3>
            <p>{notif.message}</p>
            <span className="time-text">
              {new Date(notif.time).toLocaleTimeString()}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationList;
