import React from 'react';

const Modal = ({ onClose, onSave, tempSelectedComplaints, handleComplaintToggle }) => {
  const complaintsList = [
    'Abdominal distension',
    'Abdominal mass NOS',
    'Abdominal pain epigastric',
    'Abdominal pain / cramps general',
    'Abdominal pain localized other',
  ];

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Add Diagnosis</h3>
            <ul>
              {complaintsList.map((complaint) => (
                <li
                  key={complaint}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="complaint"
                    value={complaint}
                    checked={tempSelectedComplaints.includes(complaint)}
                    onChange={() => handleComplaintToggle(complaint)}
                    className="mr-2"
                  />
                  <span>{complaint}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
                onClick={onSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
