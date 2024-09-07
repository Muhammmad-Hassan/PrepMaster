import React from "react";

const ScoreDisplayComponent = ({ score }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white text-center">
      <h3 className="text-2xl font-bold text-gray-800">
        Your Score: <span className="text-blue-600">{score}/100</span>
      </h3>
    </div>
  );
};

export default ScoreDisplayComponent;
