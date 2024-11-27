import React, { useState } from "react";
import { FaPlay, FaSearch, FaAdjust, FaKeyboard, FaRedo, FaFileAlt } from "react-icons/fa";

const Examinations = () => {
  const [comments, setComments] = useState("");

  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log("Uploaded files:", files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log("Dropped files:", files);
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
      <div className="text-left border-b-2 border-sky-500 mb-4">
        <h2 className="text-xl font-bold">Patient Examinations</h2>
      </div>
      <div className="flex justify-center mb-6">
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
        className="border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto h-80 w-80"
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
          className="cursor-pointer text-center text-sm text-gray-500 hover:text-blue-500"
        >
          Drag & Drop <br /> or <br /> <span className="underline">Click Here</span>
        </label>
      </div>

      <div className="mt-6">
        <textarea
          className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          rows="3"
          placeholder="Add your comments here..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Examinations;
