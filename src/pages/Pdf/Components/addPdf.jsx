import React, { useState } from "react";
import { Input, Button, DatePicker, Upload, message, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddPdfForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [standard, setStandard] = useState("");
  const [summary, setSummary] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [file, setFile] = useState(null);

  const beforeUpload = (file) => {
    if (file.type !== "application/pdf") {
      message.error("Only PDF files are allowed!");
      return false;
    }
    setFile(file);
    return false;
  };

  const handleSubmit = () => {
    if (!title || !standard || !publishDate || !file) {
      message.error("All fields are required!");
      return;
    }
    onAdd({
      title,
      standard,
      summary,
      publishDate,
      file: URL.createObjectURL(file),
    });
    message.success("PDF uploaded successfully!");
  };

  return (
    <div>
      <Select placeholder="Select Standard" onChange={setStandard}>
        <Option value="Standard 10">10th</Option>
        <Option value="Standard 11">11th</Option>
        <Option value="Standard 12">12th</Option>
      </Select>
      <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <DatePicker
        format="YYYY-MM-DD"
        onChange={(date, dateString) => setPublishDate(dateString)}
      />
      <Input.TextArea
        placeholder="Summary"
        onChange={(e) => setSummary(e.target.value)}
      />
      <Upload beforeUpload={beforeUpload}>
        <Button icon={<UploadOutlined />}>Upload PDF</Button>
      </Upload>
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default AddPdfForm;
