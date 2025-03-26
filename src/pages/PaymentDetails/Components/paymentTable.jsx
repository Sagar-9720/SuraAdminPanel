import React, { useState } from "react";
import { Table, Button } from "antd";
import InvoiceModal from "./InvoiceModal";
import styles from "../PaymentPage.module.css";

const PaymentTable = ({ payments }) => {
  const [invoiceData, setInvoiceData] = useState(null);

  const columns = [
    { title: "User Name", dataIndex: "userName", key: "userName" },
    { title: "Standard", dataIndex: "standard", key: "standard" },
    { title: "Medium", dataIndex: "medium", key: "medium" },
    { title: "Subject", dataIndex: "subject", key: "subject" },
    { title: "Chapter", dataIndex: "chapter", key: "chapter" },
    {
      title: "Amount Paid",
      dataIndex: "amount",
      key: "amount",
      render: (amt) => `₹${amt}`,
    },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Invoice",
      key: "invoice",
      render: (_, record) => (
        <Button type="link" onClick={() => setInvoiceData(record)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={payments} rowKey="id" />
      {invoiceData && (
        <InvoiceModal data={invoiceData} onClose={() => setInvoiceData(null)} />
      )}
    </>
  );
};

export default PaymentTable;
