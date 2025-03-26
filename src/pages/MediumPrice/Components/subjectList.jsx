import React from "react";

const subjects = {
  English_10th: ["Math", "Science", "History"],
  Tamil_11th: ["Physics", "Chemistry", "Biology"],
};

const SubjectList = ({ medium, onSelectSubject }) => {
  const subjectList = subjects[`${medium.name}_${medium.standard}`] || [];

  return (
    <div className="section">
      <h2>Subjects</h2>
      {subjectList.map((subject, index) => (
        <div
          key={index}
          className="list-item"
          onClick={() => onSelectSubject(subject)}
        >
          {subject}
        </div>
      ))}
    </div>
  );
};

export default SubjectList;
