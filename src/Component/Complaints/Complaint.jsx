import React, { useState } from 'react';
import Modal from './Modal/modal';

const ComplaintSymptomsStep = ({
  selectedComplaints,
  setSelectedComplaints,
  complaintComments,
  setComplaintComments,
  handleRemoveComplaint,
  showValidation
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempSelectedComplaints, setTempSelectedComplaints] = useState([...selectedComplaints]);

  const handleComplaintToggle = (complaint) => {
    if (tempSelectedComplaints.includes(complaint)) {
      setTempSelectedComplaints(tempSelectedComplaints.filter((c) => c !== complaint));
    } else {
      setTempSelectedComplaints([...tempSelectedComplaints, complaint]);
    }
  };

  const handleSaveComplaints = () => {
    setSelectedComplaints(tempSelectedComplaints);
    setIsModalOpen(false);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-left">Patient Complaints / Symptoms</h2>
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full"
          onClick={() => {
            setTempSelectedComplaints(selectedComplaints);
            setIsModalOpen(true);
          }}
        >
          Select Complaints/Symptoms
        </button>
      </div>

      {selectedComplaints.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {selectedComplaints.map((complaint) => (
              <div
                key={complaint}
                className="bg-purple-100 rounded-full px-3 py-1 flex items-center text-sm"
              >
                {complaint}
                <button
                  onClick={() => handleRemoveComplaint(complaint)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="comments" className="block font-medium mb-2 text-left">
          Comments
        </label>
        <textarea
          id="comments"
          rows="3"
          className={`w-full border ${
            showValidation && complaintComments.trim() === '' ? 'border-red-500' : 'border-gray-300'
          } rounded py-2 px-3 focus:outline-none focus:ring focus:border-purple-500`}
          placeholder="Add your comments here..."
          value={complaintComments}
          onChange={(e) => setComplaintComments(e.target.value)}
        />
        {showValidation && (
          <div className="mt-2">
            {complaintComments.trim() === '' && (
              <p className="text-red-500 text-sm text-left">Comments Field Required *</p>
            )}
            {selectedComplaints.length === 0 && (
              <p className="text-red-500 text-sm text-left">Please select at least one complaint</p>
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveComplaints}
          tempSelectedComplaints={tempSelectedComplaints}
          handleComplaintToggle={handleComplaintToggle}
        />
      )}
    </div>
  );
};

export default ComplaintSymptomsStep;

