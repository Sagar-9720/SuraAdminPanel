import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import styles from "../PaymentPage.module.css";

const { Option } = Select;

const SearchFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({});

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className={styles.filters}>
      <Input
        placeholder="User Name"
        onChange={(e) => handleChange("userName", e.target.value)}
      />
      <Input
        placeholder="Mobile Number"
        onChange={(e) => handleChange("mobile", e.target.value)}
      />
      <Select
        placeholder="Standard"
        onChange={(value) => handleChange("standard", value)}
      >
        <Option value="10th">10th</Option>
        <Option value="11th">11th</Option>
        <Option value="12th">12th</Option>
      </Select>
      <Select
        placeholder="Status"
        onChange={(value) => handleChange("status", value)}
      >
        <Option value="Success">Success</Option>
        <Option value="Cancelled">Cancelled</Option>
      </Select>
      <Button onClick={() => onFilter(filters)}>Apply Filters</Button>
    </div>
  );
};

export default SearchFilters;
