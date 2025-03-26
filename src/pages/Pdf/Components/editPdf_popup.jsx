import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

const EditPdfPopup = ({ open, onClose, pdfData, onSave }) => {
  const [title, setTitle] = useState(pdfData.title);
  const [summary, setSummary] = useState(pdfData.summary);

  return (
    <Modal title="Edit PDF" open={open} onCancel={onClose} footer={null}>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input.TextArea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <Button type="primary" onClick={() => onSave({ title, summary })}>
        Save
      </Button>
    </Modal>
  );
};

export default EditPdfPopup;
