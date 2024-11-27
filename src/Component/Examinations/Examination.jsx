import React, { useState } from "react";
import { FaPlay, FaSearch, FaAdjust, FaKeyboard, FaRedo, FaFileAlt } from "react-icons/fa";

const Examinations = () => {
  const [comments, setComments] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
    console.log("Uploaded files:", files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles(files);
    console.log("Dropped files:", files);
  };

  const isNextEnabled = comments.trim() !== "" && uploadedFiles.length > 0;

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
        className="border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto h-48 w-56"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileUpload"
          multiple
          className="hidden"
          onChange={handleFileUpload}
        />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer text-center text-sm text-sky-600"
        >
          Drag & Drop <br /> or <br /> <span className="underline">Click Here</span>
        </label>
      </div>

      <div className="mt-4">
        <label htmlFor="comments" className="block font-medium mb-2 text-left">
          Comments
        </label>
        <textarea
          id="comments"
          rows="3"
          className="w-full border rounded py-2 px-3 focus:outline-none focus:ring"
          placeholder="Add your comments here..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        {comments.trim() === "" && (
          <p className="text-red-500 text-sm text-left">Comments Field Required *</p>
        )}
      </div>
    </div>
  );
};

export default Examinations;
