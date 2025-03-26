import React, { useState } from "react";

const EditPriceModal = ({ medium, onClose }) => {
  const [actualPrice, setActualPrice] = useState(medium.actualPrice);
  const [offerPercentage, setOfferPercentage] = useState(
    medium.offerPercentage
  );

  const offerPrice = (
    actualPrice -
    (actualPrice * offerPercentage) / 100
  ).toFixed(2);

  return (
    <div className="modal">
      <h3>Edit Price - {medium.name}</h3>
      <label>Actual Price:</label>
      <input
        type="number"
        value={actualPrice}
        onChange={(e) => setActualPrice(e.target.value)}
      />

      <label>Offer Percentage:</label>
      <input
        type="number"
        value={offerPercentage}
        onChange={(e) => setOfferPercentage(e.target.value)}
      />

      <p>Final Price: ₹{offerPrice}</p>
      <button onClick={onClose}>Save</button>
    </div>
  );
};

export default EditPriceModal;
