
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';  // Approval icon

const ApprovalDialog = () => {
  const handleApprove = () => {
    console.log('MCQs approved and submitted for admin approval.');
    // You can add any additional functionality if required.
  };

  return (
    <div className="dialog-overlay flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-50">
      <div className="dialog-container w-full max-w-lg bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Submit for Approval</h2>
        <p className="text-gray-700 mb-6">The MCQs have been created and priced. Submit them for admin approval.</p>
        <button 
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleApprove}
        >
          <FaThumbsUp className="mr-2" /> Approve and Submit
        </button>
      </div>
    </div>
  );
};

export default ApprovalDialog;