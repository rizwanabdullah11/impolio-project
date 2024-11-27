import React, { useState } from 'react';

const Investigations = () => {
  const [labTests, setLabTests] = useState([]); 
  const [rapidTests, setRapidTests] = useState([]); 
  const [notes, setNotes] = useState(''); 

  const handleAddLabTests = () => {
    const test = prompt("Enter the name of the lab test:");
    if (test) setLabTests([...labTests, test]);
  };

  const handleAddRapidTests = () => {
    const test = prompt("Enter the name of the rapid test:");
    if (test) setRapidTests([...rapidTests, test]);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6 text-left">Investigations</h2>
      
      <div className="flex justify-between mb-4">
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
          onClick={handleAddLabTests}
        >
          Add Lab Tests
        </button>
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
          onClick={handleAddRapidTests}
        >
          Add Rapid Tests
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Selected Lab Tests:</h3>
          {labTests.length > 0 ? (
            <ul className="list-disc list-inside">
              {labTests.map((test, index) => (
                <li key={index}>{test}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No lab tests selected.</p>
          )}
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Selected Rapid Tests:</h3>
          {rapidTests.length > 0 ? (
            <ul className="list-disc list-inside">
              {rapidTests.map((test, index) => (
                <li key={index}>{test}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No rapid tests selected.</p>
          )}
        </div>
      </div>

      {/* Notes Section */}
      <div>
        <label htmlFor="notes" className="block font-medium mb-2 text-left">Notes:</label>
        <textarea
          id="notes"
          rows="4"
          className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:border-purple-500"
          placeholder="Add your notes here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Investigations;
