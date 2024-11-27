import React from 'react';

const Next = ({ handlePrevious, handleNext, comments, selectedComplaints }) => {
  return (
    <div>
      <button
        type="button"
        className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded mr-96 ${
          handlePrevious ? '' : 'cursor-not-allowed'
        }`}
        onClick={handlePrevious}
        disabled={!handlePrevious}
      >
        Previous
      </button>

      <button
        type="button"
        className={`bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 ml-96 rounded ${
          comments.trim() === '' || selectedComplaints.length === 0 ? ' cursor-not-allowed' : ''
        }`}
        disabled={comments.trim() === '' || selectedComplaints.length === 0}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Next;

