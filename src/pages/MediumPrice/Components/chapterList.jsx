import React, { useState } from "react";

const chapters = {
  Math: ["Algebra", "Geometry", "Calculus"],
  Science: ["Physics Basics", "Chemistry Basics", "Biology Basics"],
};

const ChapterList = ({ subject }) => {
  const [prices, setPrices] = useState({
    Algebra: 500,
    Geometry: 400,
    Calculus: 600,
  });

  const handlePriceChange = (chapter, newPrice) => {
    setPrices((prev) => ({ ...prev, [chapter]: newPrice }));
  };

  return (
    <div className="section">
      <h2>Chapters - {subject}</h2>
      {chapters[subject]?.map((chapter, index) => (
        <div key={index} className="list-item">
          <span>{chapter}</span>
          <input
            type="number"
            value={prices[chapter]}
            onChange={(e) => handlePriceChange(chapter, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ChapterList;
