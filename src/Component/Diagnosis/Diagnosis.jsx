import React, { useState } from 'react';
import Modal from './Modal/modal';

const Diagnosis = ({
  selectedDiagnosis,
  setSelectedDiagnosis,
  comments,
  setComments,
  handleRemoveDiagnosis,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempSelectedDiagnosis, setTempSelectedDiagnosis] = useState([...selectedDiagnosis]);

  const handleDiagnosisToggle = (diagnosis) => {
    if (tempSelectedDiagnosis.includes(diagnosis)) {
      setTempSelectedDiagnosis(tempSelectedDiagnosis.filter((item) => item !== diagnosis));
    } else {
      setTempSelectedDiagnosis([...tempSelectedDiagnosis, diagnosis]);
    }
  };

  const handleSaveDiagnosis = () => {
    setSelectedDiagnosis(tempSelectedDiagnosis);
    setIsModalOpen(false);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-left">Diagnosis</h2>
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full"
          onClick={() => {
            setTempSelectedDiagnosis(selectedDiagnosis);
            setIsModalOpen(true);
          }}
        >
          Add Diagnosis
        </button>
      </div>

      {selectedDiagnosis.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {selectedDiagnosis.map((diagnosis) => (
              <div
                key={diagnosis}
                className="bg-purple-100 rounded-full px-3 py-1 flex items-center text-sm cursor-pointer hover:bg-purple-200"
              >
                {diagnosis}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveDiagnosis(diagnosis);
                  }}
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
        <textarea
          id="comments"
          rows="3"
          className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:border-purple-500"
          placeholder="Add your notes here..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        {(comments.trim() === '' || selectedDiagnosis.length === 0) && (
          <p className="text-red-500 text-sm text-left">
            {comments.trim() === '' ? 'Comments Field Required *' : 'Please select at least one Diagnosis'}
          </p>
        )}
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveDiagnosis}
          tempSelectedDiagnosis={tempSelectedDiagnosis}
          handleDiagnosisToggle={handleDiagnosisToggle}
        />
      )}
    </div>
  );
};

export default Diagnosis;
