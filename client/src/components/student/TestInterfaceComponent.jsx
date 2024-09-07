import React, { useState } from "react";

const TestInterfaceComponent = ({ questions, onSubmitTest }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-bold mb-4">
        Question {currentQuestionIndex + 1}
      </h3>
      <p className="mb-6 text-gray-700">
        {questions[currentQuestionIndex].question}
      </p>
      <div className="mb-6">
        {questions[currentQuestionIndex].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(currentQuestionIndex, option)}
            className="block w-full mb-2 p-3 border border-gray-300 rounded-lg shadow-sm bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Previous
        </button>
        <button
          onClick={nextQuestion}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
        <button
          onClick={() => jumpToQuestion(questions.length - 1)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Jump to Last
        </button>
        <button
          onClick={() => onSubmitTest(answers)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default TestInterfaceComponent;
