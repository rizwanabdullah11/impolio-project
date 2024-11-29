import React from 'react';
import { useNavigate } from 'react-router-dom';

const Next = ({ handlePrevious, handleNext,  currentStep }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (currentStep === 4) {
      navigate('/appointment');
      return;
    }
    handleNext();
  };

  return (
    <div className='bg-ue-500 flex justify-between'>
      <button
        type="button"
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded mr-96"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        type="button"
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 ml-96 rounded"
        onClick={handleNextClick}
      >
        {currentStep === 4 ? 'Next' : 'Next'}
      </button>
    </div>
  );
};

export default Next;

