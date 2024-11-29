import React, { useState } from 'react';
import LabTestModal from './Modal/labModal';
import RapidTestModal from './Modal/testModal';

const Investigations = ({ 
  selectedInvestigations, 
  setSelectedInvestigations,
  investigationNotes,
  setInvestigationNotes,
  showValidation 
}) => {
  const [labTests, setLabTests] = useState([]);
  const [rapidTests, setRapidTests] = useState([]);
  const [isLabModalOpen, setIsLabModalOpen] = useState(false);
  const [selectedLabTests, setSelectedLabTests] = useState([]);
  const [isRapidModalOpen, setIsRapidModalOpen] = useState(false);
  const [selectedRapidTests, setSelectedRapidTests] = useState([]);
  const [rapidTestStatuses, setRapidTestStatuses] = useState({});
  const [rapidTestImages, setRapidTestImages] = useState({});

  const handleAddLabTests = () => {
    setIsLabModalOpen(true);
  };

  const handleLabTestsSave = (newSelectedLabTests) => {
    setLabTests(newSelectedLabTests);
    setSelectedLabTests(newSelectedLabTests);
    setSelectedInvestigations([...rapidTests, ...newSelectedLabTests]);
    setIsLabModalOpen(false);
  };

  const handleRemoveLabTest = (test) => {
    const updatedLabTests = labTests.filter((t) => t !== test);
    setLabTests(updatedLabTests);
    setSelectedInvestigations([...rapidTests, ...updatedLabTests]);
  };

  const handleAddRapidTests = () => {
    setIsRapidModalOpen(true);
  };

  const handleRapidTestsSave = (newSelectedRapidTests) => {
    setRapidTests(newSelectedRapidTests);
    setSelectedRapidTests(newSelectedRapidTests);
    setSelectedInvestigations([...labTests, ...newSelectedRapidTests]);
    setIsRapidModalOpen(false);
  };

  const handleRemoveRapidTest = (test) => {
    const updatedRapidTests = rapidTests.filter((t) => t !== test);
    setRapidTests(updatedRapidTests);
    setSelectedInvestigations([...labTests, ...updatedRapidTests]);
    
    const updatedStatuses = { ...rapidTestStatuses };
    delete updatedStatuses[test];
    setRapidTestStatuses(updatedStatuses);

    const updatedImages = { ...rapidTestImages };
    delete updatedImages[test];
    setRapidTestImages(updatedImages);
  };

  const handleStatusChange = (test, status) => {
    setRapidTestStatuses((prevStatuses) => ({
      ...prevStatuses,
      [test]: status,
    }));
  };

  const handleImageUpload = (test, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setRapidTestImages((prevImages) => ({
          ...prevImages,
          [test]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-3/4 h-fit mx-auto bg-white rounded-lg shadow-md p-2">
      <h2 className="text-xl font-bold mb-2 text-left">Investigations</h2>

      <div className="flex justify-between mb-2">
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full"
          onClick={handleAddLabTests}
        >
          Add Lab Tests
        </button>

        <LabTestModal
          isOpen={isLabModalOpen}
          onClose={() => {
            setIsLabModalOpen(false);
            setSelectedLabTests([]);
          }}
          onSave={handleLabTestsSave}
          labList={['Complete Blood Count', 'Liver Function Test', 'Kidney Function Test', 'Lipid Profile']}
          selectedLabTests={selectedLabTests}
          setSelectedLabTests={setSelectedLabTests}
        />

        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full"
          onClick={handleAddRapidTests}
        >
          Add Rapid Tests
        </button>

        <RapidTestModal
          isOpen={isRapidModalOpen}
          onClose={() => {
            setIsRapidModalOpen(false);
            setSelectedRapidTests([]);
          }}
          onSave={handleRapidTestsSave}
          rapidList={['Malaria', 'HIV', 'Test']}
          selectedRapidTests={selectedRapidTests}
          setSelectedRapidTests={setSelectedRapidTests}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-2">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2 text-left">Selected Lab Tests:</h3>
          {labTests.length > 0 ? (
            <ul className="list-disc list-inside">
              {labTests.map((test, index) => (
                <li key={index} className="flex items-center justify-between space-x-2">
                  <span>{test}</span>
                  <input
                    type="number"
                    className="border border-gray-300 rounded py-1 px-2 focus:outline-none focus:ring focus:border-purple-500"
                  />
                  <button
                    type="button"
                    className="text-white font-bold p-2 rounded-full bg-red-500 border-2 border-white hover:bg-red-600 hover:text-white"
                    onClick={() => handleRemoveLabTest(test)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-left">No lab tests selected.</p>
          )}
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2 text-left">Selected Rapid Tests:</h3>
          {rapidTests.length > 0 ? (
            <ul className="list-disc list-inside">
              {rapidTests.map((test, index) => (
                <li key={index} className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <span>{test}</span>
                    <button
                      type="button"
                      className="text-white font-bold p-2 rounded-full ml-56 bg-red-500 border-2 border-white hover:bg-red-600 hover:text-white"
                      onClick={() => document.getElementById(`attach-image-${test}`).click()}
                    >
                      Attach Images
                    </button>
                    <input
                      type="file"
                      id={`attach-image-${test}`}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleImageUpload(test, e.target.files[0])}
                    />
                    <button
                      type="button"
                      className="text-white font-bold p-2 rounded-full bg-red-500 border-2 border-white hover:bg-red-600 hover:text-white"
                      onClick={() => handleRemoveRapidTest(test)}
                    >
                      Remove
                    </button>
                  </div>
                  <div>
                    <label
                      htmlFor={`status-${test}`}
                      className="block text-lg text-left"
                    >
                      Status:
                    </label>
                    <select
                      id={`status-${test}`}
                      value={rapidTestStatuses[test] || ''}
                      onChange={(e) => handleStatusChange(test, e.target.value)}
                      className="border-gray-300 rounded p-2 w-full"
                    >
                      <option value="">Select status</option>
                      <option value="POSITIVE">POSITIVE</option>
                      <option value="NEGATIVE">NEGATIVE</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-left">
                      Selected Images:
                    </label>
                    {rapidTestImages[test] && (
                      <div className="mt-2">
                        <img
                          src={rapidTestImages[test]}
                          alt="Uploaded"
                          className="w-32 h-32 object-cover rounded"
                        />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No rapid tests selected.</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="notes" className="block font-medium text-left">
          Notes:
        </label>
        <textarea
          id="notes"
          rows="2"
          className={`w-full border ${
            showValidation && investigationNotes?.trim() === '' ? 'border-red-500' : 'border-gray-300'
          } rounded py-2 px-3 focus:outline-none focus:ring focus:border-purple-500`}
          placeholder="Add your notes here..."
          value={investigationNotes}
          onChange={(e) => setInvestigationNotes(e.target.value)}
        />
        {showValidation && (
          <div className="mt-2">
            {investigationNotes?.trim() === '' && (
              <p className="text-red-500 text-sm text-left">Notes Field Required *</p>
            )}
            {selectedInvestigations.length === 0 && (
              <p className="text-red-500 text-sm text-left">Please select at least one investigation</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Investigations;