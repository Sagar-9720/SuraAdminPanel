import React from "react";
import { Modal } from "antd";

const InvoiceModal = ({ data, onClose }) => {
  return (
    <Modal
      title="Invoice Details"
      visible={!!data}
      onCancel={onClose}
      footer={null}
    >
      <p>
        <strong>User:</strong> {data.userName}
      </p>
      <p>
        <strong>Amount Paid:</strong> ₹{data.amount}
      </p>
      <p>
        <strong>Standard:</strong> {data.standard}
      </p>
      <p>
        <strong>Subject:</strong> {data.subject}
      </p>
      <p>
        <strong>Date:</strong> {data.date}
      </p>
    </Modal>
  );
};

export default InvoiceModal;
