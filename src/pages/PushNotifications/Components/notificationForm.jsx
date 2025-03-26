import React, { useState } from "react";

const NotificationForm = ({ onSend }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState("all");
  const [standard, setStandard] = useState("");

  const handleSend = () => {
    const newNotification = {
      title,
      message,
      target,
      standard,
      time: new Date(),
    };
    onSend(newNotification);
    setTitle("");
    setMessage("");
    setTarget("all");
    setStandard("");
  };

  return (
    <div className="notification-form">
      <h2>Send Notification</h2>
      <input
        type="text"
        placeholder="Notification Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input-field"
      />
      <select
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="input-field"
      >
        <option value="all">All Users</option>
        <option value="students">Students</option>
        <option value="teachers">Teachers</option>
      </select>
      {target === "students" && (
        <select
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          className="input-field"
        >
          <option value="">Select Standard</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
      )}
      <button onClick={handleSend} className="send-button">
        Confirm and Send
      </button>
    </div>
  );
};

export default NotificationForm;
