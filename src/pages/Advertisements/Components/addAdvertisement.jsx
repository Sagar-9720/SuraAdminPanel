import React, { useState } from "react";
import { Input, Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const AddAdvertisement = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [link, setLink] = useState("");

  const handleSubmit = () => {
    if (!title || !text || !image || !link) {
      message.error("Please fill all fields!");
      return;
    }
    message.success("Advertisement added successfully!");
    setTitle("");
    setText("");
    setImage(null);
    setLink("");
  };

  return (
    <div className="add-ad-form">
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input.TextArea
        placeholder="Text Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Upload
        beforeUpload={() => false}
        onChange={(info) => setImage(info.file)}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Upload Banner Image</Button>
      </Upload>
      <Input
        placeholder="Redirection Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <Button type="primary" onClick={handleSubmit} className="submit-button">
        Add Advertisement
      </Button>
    </div>
  );
};

export default AddAdvertisement;
