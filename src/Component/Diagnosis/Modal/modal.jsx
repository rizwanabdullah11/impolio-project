import React from 'react';

const Modal = ({ onClose, onSave, handleDiagnosisToggle }) => {
  const DiagnosisList = [
    '010-TB',
    'C00-D49 - Neoplasms',
    'A000 - cholerae',
    'A0102 - Typhoid fever with heart involvement',
    'A013 - Paratyphoid fever C',
  ];

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Add Diagnosis</h3>
            <div>
              <select
                className="border-gray-300 rounded p-2 w-full mb-4"
                onChange={(e) => handleDiagnosisToggle(e.target.value)}
              >
                <option value="">Select Diagnosis</option>
                {DiagnosisList.map((diagnosis, index) => (
                  <option key={index} value={diagnosis}>
                    {diagnosis}
                  </option>
                ))}
              </select>
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={onSave}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

