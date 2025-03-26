import React, { useState } from "react";
import { Input, Button, Table } from "antd";
import { FileExcelOutlined, SearchOutlined } from "@ant-design/icons";
import FeedbackTable from "./Components/feedbackTable";
import exportToExcel from "./Utils/exportToExcel";
import SearchBar from "./Components/searchBar";
import styles from "./feedbackPage.module.css";

const dummyFeedbacks = Array.from({ length: 20 }, (_, index) => ({
  key: index + 1,
  userName: `User ${index + 1}`,
  mobile: `98765432${(index + 1) % 10}`,
  standard: ["10th", "11th", "12th"][index % 3],
  feedback: `Feedback message ${index + 1}`,
  date: new Date().toLocaleDateString(),
}));

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState(dummyFeedbacks);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredFeedbacks = feedbacks.filter((feedback) =>
    feedback.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Feedback Management</h1>

      <div className={styles.actions}>
        <SearchBar onSearch={handleSearch} />
        <Button
          type="primary"
          icon={<FileExcelOutlined />}
          onClick={() => exportToExcel(filteredFeedbacks, "FeedbackData")}
        >
          Export to Excel
        </Button>
      </div>

      <FeedbackTable feedbacks={filteredFeedbacks} />
    </div>
  );
};

export default Feedback;
