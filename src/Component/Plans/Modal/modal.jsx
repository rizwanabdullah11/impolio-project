import React, { useState, useMemo } from 'react';

const AddNewPlanModal = ({ onClose, onSave }) => {
  const [diagnosis, setDiagnosis] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [mg, setMg] = useState('');
  const [duration, setDuration] = useState('');
  const [medicationTime, setMedicationTime] = useState([]);
  const [timingOption, setTimingOption] = useState([]);
  const [importantNote, setImportantNote] = useState('');

  const isFormValid = useMemo(() => {
    return (
      diagnosis &&
      medicineName &&
      mg &&
      duration &&
      medicationTime.length > 0 &&
      timingOption.length > 0 &&
      importantNote.trim() !== ''
    );
  }, [diagnosis, medicineName, mg, duration, medicationTime, timingOption, importantNote]);

  const handleSave = () => {
    if (isFormValid) {
      const newPlanData = {
        diagnosis,
        medicineName,
        mg,
        duration,
        medicationTime,
        timingOption,
        importantNote
      };
      onSave(newPlanData);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Plan</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">Diagnosis</label>
              <select
                className="mt-1 block w-full h-8 border-black-500 shadow-sm shadow-black focus:border-black-500 focus:ring-black-500"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
              >
                <option value="">Select Diagnosis</option>
                <option value="010-TB">010-TB</option>
                <option value="C00-D49 - Neoplasms">C00-D49 - Neoplasms</option>
                <option value="A000 - cholerae">A000 - cholerae</option>
                <option value="A0102 - Typhoid fever with heart involvement">A0102 - Typhoid fever with heart involvement</option>
                <option value="A013 - Paratyphoid fever C">A013 - Paratyphoid fever C</option>
              </select>
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700">Medicine Name</label>
              <select
                className="mt-1 block w-full h-8 border-black-500 shadow-sm shadow-black focus:border-black-500 focus:ring-black-500"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
              >
                <option value="">Select Medicine</option>
                <option value="Richard Webster">Richard Webster</option>
                <option value="Richard Webster">Richard</option>
                <option value="Richard Webster">Webster</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-medium text-gray-700">Mg</label>
                <select
                  className="mt-1 block w-full h-8 border-black-500 shadow-sm shadow-black focus:border-black-500 focus:ring-black-500"
                  value={mg}
                  onChange={(e) => setMg(e.target.value)}
                >
                  <option value="select mg">Select MG</option>
                  <option value="25mg">25mg</option>
                  <option value="50mg">50mg</option>
                  <option value="75mg">75mg</option>
                  <option value="100mg">100mg</option>
                </select>
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700">Duration</label>
                <select
                  className="mt-1 block w-full h-8 border-black-500 shadow-sm shadow-black focus:border-black-500 focus:ring-black-500"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="select duration">Select Duration</option>
                  <option value="2 Days">2 Days</option>
                  <option value="4 Days">4 Days</option>
                  <option value="6 Days">6 Days</option>
                  <option value="8 Days">8 Days</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700">Medication Time</label>
              <div className="mt-1 flex space-x-4 block w-full h-8 focus:border-black-500 focus:ring-black-500">
                {['Morning', 'Noon', 'Evening', 'Night'].map((time, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`px-4 py-1 text-sm ${
                      medicationTime.includes(time)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => {
                      if (medicationTime.includes(time)) {
                        setMedicationTime(medicationTime.filter((t) => t !== time));
                      } else {
                        setMedicationTime([...medicationTime, time]);
                      }
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700">To be Taken</label>
              <div className="mt-1 flex space-x-4">
                {['After Food', 'Before Food'].map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`px-4 py-1 h-8 text-sm ${
                      timingOption.includes(option)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => {
                      if (timingOption.includes(option)) {
                        setTimingOption(timingOption.filter((o) => o !== option));
                      } else {
                        setTimingOption([...timingOption, option]);
                      }
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700">Important Note</label>
              <input
                type="text"
                className="mt-1 block w-full h-8 border-gray-300 shadow-sm shadow-black focus:border-purple-500 focus:ring-purple-500"
                value={importantNote}
                onChange={(e) => setImportantNote(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`${
                isFormValid
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white font-medium py-2 px-4 rounded`}
              onClick={handleSave}
              disabled={!isFormValid}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPlanModal;