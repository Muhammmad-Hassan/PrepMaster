import React, { useState } from "react";

const SearchComponent = ({ onSelectTest }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const tests = ["Math Test", "Science Test", "English Test"];

  const filteredTests = tests.filter((test) =>
    test.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white">
      <input
        type="text"
        placeholder="Search for a test"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="mt-4">
        {filteredTests.length > 0 ? (
          filteredTests.map((test) => (
            <li
              key={test}
              onClick={() => onSelectTest(test)}
              className="p-2 cursor-pointer hover:bg-gray-200 rounded-md"
            >
              {test}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No tests found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;
