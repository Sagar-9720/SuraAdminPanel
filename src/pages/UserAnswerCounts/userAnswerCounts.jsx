import React, { useState } from "react";
import { Table, Input, Button, Pagination, Select, Form, DatePicker } from "antd";

const { Option } = Select;

const dummyData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    tenth: Math.floor(Math.random() * 100),
    eleventh: Math.floor(Math.random() * 100),
    twelfth: Math.floor(Math.random() * 100),
}));

const UserAnswerCounts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [form] = Form.useForm();
    const pageSize = 8;

    const columns = [
        { title: "SNo", dataIndex: "id", key: "id" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "10th", dataIndex: "tenth", key: "tenth" },
        { title: "11th", dataIndex: "eleventh", key: "eleventh" },
        { title: "12th", dataIndex: "twelfth", key: "twelfth" },
        {
            title: "Total",
            key: "total",
            render: (_, record) => record.tenth + record.eleventh + record.twelfth,
        },
    ];

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleReset = () => {
        form.resetFields();
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>User Answer Counts</h1>
            <Form form={form} layout="inline" style={{ marginBottom: "20px" }}>
                <Form.Item name="month" label="Month">
                    <Select placeholder="Select month" style={{ width: 120 }}>
                        <Option value="january">January</Option>
                        <Option value="february">February</Option>
                        <Option value="march">March</Option>
                        <Option value="april">April</Option>
                        <Option value="may">May</Option>
                        <Option value="june">June</Option>
                        <Option value="july">July</Option>
                        <Option value="august">August</Option>
                        <Option value="september">September</Option>
                        <Option value="october">October</Option>
                        <Option value="november">November</Option>
                        <Option value="december">December</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="year" label="Year">
                    <Input placeholder="Enter year" style={{ width: 120 }} />
                </Form.Item>
                <Form.Item name="date" label="Date">
                    <DatePicker placeholder="Select date" style={{ width: 150 }} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sortlist
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleReset}>Reset</Button>
                </Form.Item>
            </Form>
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

export default UserAnswerCounts;
