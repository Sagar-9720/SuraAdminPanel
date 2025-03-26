import React, { useState } from "react";
import MediumList from "./Components/mediumList";
import SubjectList from "./Components/subjectList";
import ChapterList from "./Components/chapterList";
import "./styles.css";

const MediumPriceManagement = () => {
  const [selectedMedium, setSelectedMedium] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="container">
      <h1 className="title">Medium List & Price Management</h1>
      <div className="dashboard">
        <MediumList onSelectMedium={setSelectedMedium} />
        {selectedMedium && (
          <SubjectList
            medium={selectedMedium}
            onSelectSubject={setSelectedSubject}
          />
        )}
        {selectedSubject && <ChapterList subject={selectedSubject} />}
      </div>
    </div>
  );
};

export default MediumPriceManagement;
