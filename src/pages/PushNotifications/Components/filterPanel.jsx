import React, { useState } from "react";

const FilterPanel = () => {
  const [userType, setUserType] = useState("all");
  const [standard, setStandard] = useState("all");

  return (
    <div className="filter-panel">
      <h2>Filter Notifications</h2>
      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        className="input-field"
      >
        <option value="all">All Users</option>
        <option value="students">Students</option>
        <option value="teachers">Teachers</option>
      </select>

      {userType === "students" && (
        <select
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          className="input-field"
        >
          <option value="all">All Standards</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
      )}
    </div>
  );
};

export default FilterPanel;
