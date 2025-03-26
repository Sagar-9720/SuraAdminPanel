import React, { useState } from "react";
import EditPriceModal from "./editPriceModal";

const mediums = [
  {
    id: 1,
    name: "English",
    standard: "10th",
    actualPrice: 2000,
    offerPercentage: 20,
  },
  {
    id: 2,
    name: "Tamil",
    standard: "11th",
    actualPrice: 1800,
    offerPercentage: 15,
  },
];

const MediumList = ({ onSelectMedium }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedium, setSelectedMedium] = useState(null);

  const handleEditClick = (medium) => {
    setSelectedMedium(medium);
    setModalOpen(true);
  };

  return (
    <div className="section">
      <h2>Mediums</h2>
      {mediums.map((medium) => (
        <div key={medium.id} className="list-item">
          <span onClick={() => onSelectMedium(medium)}>
            {medium.name} - {medium.standard}
          </span>
          <button onClick={() => handleEditClick(medium)}>Edit Price</button>
        </div>
      ))}
      {modalOpen && (
        <EditPriceModal
          medium={selectedMedium}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default MediumList;
