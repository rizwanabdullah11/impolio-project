import React, { useState } from 'react';

const LabTestModal = ({ isOpen, onClose, onSave, labList, selectedLabTests }) => {
  const [localSelectedLabTests, setLocalSelectedLabTests] = useState(selectedLabTests);

  const handleCheckboxChange = (test) => {
    if (localSelectedLabTests.includes(test)) {
      setLocalSelectedLabTests(localSelectedLabTests.filter((t) => t !== test));
    } else {
      setLocalSelectedLabTests([...localSelectedLabTests, test]);
    }
  };

  const handleSave = () => {
    onSave(localSelectedLabTests);
    onClose();
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Select Lab Tests</h3>
            <ul>
              {labList.map((test) => (
                <li
                  key={test}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="test"
                    value={test}
                    checked={localSelectedLabTests.includes(test)}
                    onChange={() => handleCheckboxChange(test)}
                    className="mr-2"
                  />
                  <span>{test}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
                onClick={handleSave}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTestModal;