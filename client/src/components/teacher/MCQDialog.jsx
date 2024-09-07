import React, { useState } from 'react';
import { FaPlus, FaCheck } from 'react-icons/fa';  // Import icons
import PricingDialog from './PricingDialog';
import ApprovalDialog from './ApprovalDialog';

const MCQDialog = () => {
  const [showPricingDialog, setShowPricingDialog] = useState(false);
  const [showApprovalDialog, setShowApprovalDialog] = useState(false);
  const [mcqs, setMcqs] = useState([]);
  const [currentMCQ, setCurrentMCQ] = useState({ question: '', options: ['', '', ''], correctOption: '' });
  const [error, setError] = useState('');

  const handleAddMCQ = () => {
    // Check if all fields are filled before adding the MCQ
    if (currentMCQ.question === '' || currentMCQ.options.some(option => option === '') || currentMCQ.correctOption === '') {
      setError('Please fill out all fields before adding the MCQ.');
      return;
    }
    
    setMcqs([...mcqs, currentMCQ]);
    setCurrentMCQ({ question: '', options: ['', '', ''], correctOption: '' });
    setError('');  // Reset error after adding the MCQ
  };

  const handleFinish = () => {
    if (mcqs.length === 0) {
      setError('Please create at least one MCQ before finishing.');
      return;
    }
    setShowPricingDialog(true); // Show the pricing dialog after finishing
  };

  return (
    <>
      <div className="dialog-overlay flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-50">
        <div className="dialog-container w-full max-w-3xl bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">MCQ: {mcqs.length + 1}</h2>
          <textarea
            className="w-full h-24 p-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={currentMCQ.question}
            onChange={(e) => setCurrentMCQ({ ...currentMCQ, question: e.target.value })}
            placeholder="Enter your MCQ here..."
          />
          {currentMCQ.options.map((option, index) => (
            <input
              key={index}
              className="w-full mb-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={option}
              onChange={(e) => {
                const newOptions = [...currentMCQ.options];
                newOptions[index] = e.target.value;
                setCurrentMCQ({ ...currentMCQ, options: newOptions });
              }}
              placeholder={`Option ${index + 1}`}
            />
          ))}
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={currentMCQ.correctOption}
            onChange={(e) => setCurrentMCQ({ ...currentMCQ, correctOption: e.target.value })}
            placeholder="Correct Option"
          />

          {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}

          <div className="flex space-x-4">
            <button 
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleAddMCQ}
            >
              <FaPlus className="mr-2" /> Create new MCQ
            </button>
            <button 
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={handleFinish}
            >
              <FaCheck className="mr-2" /> Finish
            </button>
          </div>
        </div>
      </div>

      {showPricingDialog && <PricingDialog onPriceSet={(price) => setShowApprovalDialog(true)} />}
      {showApprovalDialog && <ApprovalDialog />}
    </>
  );
};

export default MCQDialog;