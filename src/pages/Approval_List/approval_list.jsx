import React, { useState } from "react";
import { Table, Input, Button, Pagination } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const dummyData = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Device ${index + 1}`,
  mobile_no: `123456789${index}`,
  deviceID: `DeviceID${index}`,
  new_deviceId: `NewDeviceID${index}`,
}));

const ApprovalList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Mobile No", dataIndex: "mobile_no", key: "mobile_no" },
    { title: "Device ID", dataIndex: "deviceID", key: "deviceID" },
    { title: "New Device ID", dataIndex: "new_deviceId", key: "new_deviceId" },
    {
      title: "Options",
      key: "options",
      render: (_, record) => (
        <>
          <EditOutlined style={{ marginRight: 8 }} />
          <DeleteOutlined />
        </>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Approval List</h1>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <h6>Mobile</h6>
        <Input
          placeholder="Enter mobile number"
          style={{ width: "200px", marginRight: "10px" }}
        />
        <Button type="primary">Submit</Button>
      </div>
      <Table
        columns={columns}
        dataSource={dummyData.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )}
        pagination={false}
        rowKey="id"
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={dummyData.length}
        onChange={handlePageChange}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

export default ApprovalList;
