import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "../feedbackPage.module.css";

const SearchBar = ({ onSearch }) => {
  return (
    <Input
      placeholder="Search by user name"
      onChange={(e) => onSearch(e.target.value)}
      prefix={<SearchOutlined />}
      className={styles.searchInput}
    />
  );
};

export default SearchBar;
