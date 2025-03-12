import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

const EditAdvertisementPopup = ({ open, onClose, adData, onSave }) => {
  const [standard, setStandard] = useState(adData.standard);
  const [title, setTitle] = useState(adData.title);
  const [text, setText] = useState(adData.text);
  const [image, setImage] = useState(adData.image);
  const [link, setLink] = useState(adData.link);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = () => {
    const updatedAd = { standard, title, text, image, link };
    onSave(updatedAd);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Advertisement</DialogTitle>
      <DialogContent>
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
        <div
          style={{ display: "flex", alignItems: "center", margin: "16px 0" }}
        >
          <img
            src={image}
            alt="Advertisement"
            style={{ width: "100px", height: "100px", marginRight: "16px" }}
          />
          <Button variant="contained" component="label">
            Change Image
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAdvertisementPopup;
