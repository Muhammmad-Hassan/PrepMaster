import React, { useState } from 'react';
import MCQDialog from '../components/teacher/MCQDialog';

const TeacherGreeting = ({ teacherName }) => {
  const [showMCQDialog, setShowMCQDialog] = useState(false);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold">Hi, {teacherName}</h1>
      <button 
        onClick={() => setShowMCQDialog(true)} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Create Test
      </button>
      {showMCQDialog && <MCQDialog />}
    </div>
  );
};

export default TeacherGreeting;