import React, { useState } from "react";
import SearchComponent from "../components/student/SearchComponent";
import TestPurchaseComponent from "../components/student/TestPurchaseComponent";
import TestInterfaceComponent from "../components/student/TestInterfaceComponent";
import ScoreDisplayComponent from "../components/student/ScoreDisplayComponent";

const Student = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [testPurchased, setTestPurchased] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      answer: "4",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      answer: "Paris",
    },
    // More questions...
  ];

  const calculateScore = (answers) => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        totalScore += 50; // Assuming each question carries 50 points.
      }
    });
    return totalScore;
  };

  const handleTestSubmission = (answers) => {
    const finalScore = calculateScore(answers);
    setScore(finalScore);
    setTestCompleted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        {!selectedTest ? (
          <div className="mb-8">
            <SearchComponent onSelectTest={setSelectedTest} />
          </div>
        ) : !testPurchased ? (
          <div className="mb-8">
            <TestPurchaseComponent onPurchaseComplete={() => setTestPurchased(true)} />
          </div>
        ) : !testCompleted ? (
          <div className="mb-8">
            <TestInterfaceComponent
              questions={questions}
              onSubmitTest={handleTestSubmission}
            />
          </div>
        ) : (
          <div>
            <ScoreDisplayComponent score={score} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Student;
