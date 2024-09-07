import React, { useState } from "react";

const TestPurchaseComponent = ({ onPurchaseComplete }) => {
  const [accountDetails, setAccountDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handlePurchase = () => {
    alert("Test purchased successfully!");
    onPurchaseComplete();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h3 className="text-2xl font-bold mb-6 text-center">Purchase Test</h3>
      
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
          Card Number
        </label>
        <input
          id="cardNumber"
          type="text"
          placeholder="Card Number"
          value={accountDetails.cardNumber}
          onChange={(e) =>
            setAccountDetails({ ...accountDetails, cardNumber: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">
          Expiry Date
        </label>
        <input
          id="expiryDate"
          type="text"
          placeholder="MM/YY"
          value={accountDetails.expiryDate}
          onChange={(e) =>
            setAccountDetails({ ...accountDetails, expiryDate: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
          CVV
        </label>
        <input
          id="cvv"
          type="text"
          placeholder="CVV"
          value={accountDetails.cvv}
          onChange={(e) =>
            setAccountDetails({ ...accountDetails, cvv: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handlePurchase}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TestPurchaseComponent;
