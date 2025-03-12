import React, { useState } from "react";
import { Button, TextField, MenuItem } from "@mui/material";

const AddAdvertisementForm = ({ onAdd }) => {
  const [standard, setStandard] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [link, setLink] = useState("");

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    const newAd = { standard, title, text, image, link };
    onAdd(newAd); // Pass new advertisement data to parent component
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <TextField
        select
        label="Standard"
        value={standard}
        onChange={(e) => setStandard(e.target.value)}
        fullWidth
        margin="normal"
      >
        <MenuItem value="10th standard">10th standard</MenuItem>
        <MenuItem value="11th standard">11th standard</MenuItem>
        <MenuItem value="12th standard">12th standard</MenuItem>
      </TextField>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <div style={{ display: "flex", alignItems: "center", margin: "16px 0" }}>
        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ width: "100px", height: "100px", marginRight: "16px" }}
          />
        )}
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden onChange={handleImageChange} />
        </Button>
      </div>
      <TextField
        label="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        onClick={handleSubmit}
        color="primary"
        variant="contained"
        fullWidth
      >
        Add Advertisement
      </Button>
    </div>
  );
};

export default AddAdvertisementForm;
