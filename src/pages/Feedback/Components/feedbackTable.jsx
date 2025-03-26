import React from "react";
import { Table } from "antd";

const FeedbackTable = ({ feedbacks }) => {
  const columns = [
    { title: "User Name", dataIndex: "userName", key: "userName" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Standard", dataIndex: "standard", key: "standard" },
    { title: "Feedback", dataIndex: "feedback", key: "feedback" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];

  return (
    <Table
      columns={columns}
      dataSource={feedbacks}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default FeedbackTable;
