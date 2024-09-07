import React, { useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';  // Import icon

const PricingDialog = ({ onPriceSet }) => {
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSetPrice = () => {
    // Validate price input
    if (price === '' || isNaN(price) || Number(price) <= 0) {
      setError('Please enter a valid price.');
      return;
    }
    
    onPriceSet(price); // Trigger the approval dialog after valid price
  };

  return (
    <div className="dialog-overlay flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-50">
      <div className="dialog-container w-full max-w-lg bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Add Price</h2>
        <p className="text-gray-700 mb-4">Add a reasonable price for this quiz for students.</p>
        <div className="flex items-center space-x-2 mb-4">
          <FaDollarSign className="text-xl text-gray-600" />
          <input
            className="w-full h-12 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}

        <button 
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          onClick={handleSetPrice}
        >
          Set Price
        </button>
      </div>
    </div>
  );
};

export default PricingDialog;