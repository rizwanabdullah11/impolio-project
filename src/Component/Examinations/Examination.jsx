import React, { useState, useEffect } from "react";
import { FaPlay, FaSearch, FaAdjust, FaKeyboard, FaRedo, FaFileAlt } from "react-icons/fa";

const Examinations = ({ examinationComments, setExaminationComments, selectedExamination, setSelectedExamination, showValidation }) => {
  const [uploadedFiles, setUploadedFiles] = useState(selectedExamination || []);
  const [previewUrls, setPreviewUrls] = useState([]);

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      const urls = uploadedFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls(urls);
      return () => urls.forEach(URL.revokeObjectURL);
    }
  }, [uploadedFiles]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
    setSelectedExamination(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles(files);
    setSelectedExamination(files);
  };

  return (
    <div className="w-3/4 mx-auto bg-white rounded-lg shadow-md p-4">
      <div className="text-left border-b-2 border-sky-500 mb-1">
        <h2 className="text-xl font-bold">Patient Examinations</h2>
      </div>
      <div className="flex justify-center mb-2">
        <button className="p-2 rounded bg-gray-100 hover:bg-gray-100">
          <FaPlay className="text-gray-400 text-lg" />
        </button>
        <button className="p-2 rounded bg-gray-100 hover:bg-gray-100">
          <FaSearch className="text-gray-400 text-lg" />
        </button>
        <button className="p-2 rounded bg-gray-100 hover:bg-gray-100">
          <FaAdjust className="text-gray-400 text-lg" />
        </button>
        <button className="p-2 rounded bg-gray-100 hover:bg-gray-100">
          <FaKeyboard className="text-gray-400 text-lg" />
        </button>
        <button className="p-2 rounded bg-gray-100 hover:bg-gray-100">
          <FaRedo className="text-gray-400 text-lg" />
        </button>
        <button className="p-2 rounded bg-gray-100 hover:bg-gray-100">
          <FaFileAlt className="text-gray-400 text-lg" />
        </button>
      </div>

      <div
        className={`border-dashed border-2 ${
          showValidation && uploadedFiles.length === 0 ? 'border-red-500' : 'border-gray-300'
        } rounded-lg flex items-center justify-center mx-auto h-48 w-56 relative overflow-hidden`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {previewUrls.length > 0 ? (
          <div className="flex flex-wrap gap-2 p-2">
            {previewUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Upload ${index + 1}`}
                className="h-40 w-40 object-cover rounded"
              />
            ))}
          </div>
        ) : (
          <label
            htmlFor="fileUpload"
            className="cursor-pointer text-center text-sm text-sky-600"
          >
            Drag & Drop <br /> or <br /> <span className="underline">Click Here</span>
          </label>
        )}
        <input
          type="file"
          id="fileUpload"
          multiple
          className="hidden"
          onChange={handleFileUpload}
          accept="image/*"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="comments" className="block font-medium mb-2 text-left">
          Comments
        </label>
        <textarea
          id="comments"
          rows="3"
          className={`w-full border ${
            showValidation && examinationComments.trim() === '' ? 'border-red-500' : 'border-gray-300'
          } rounded py-2 px-3 focus:outline-none focus:ring focus:border-purple-500`}
          placeholder="Add your comments here..."
          value={examinationComments}
          onChange={(e) => setExaminationComments(e.target.value)}
        />
        {showValidation && (
          <div className="mt-2">
            {examinationComments.trim() === '' && (
              <p className="text-red-500 text-sm text-left">Comments Field Required *</p>
            )}
            {selectedExamination.length === 0 && (
              <p className="text-red-500 text-sm text-left">Please upload at least one file</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Examinations;


