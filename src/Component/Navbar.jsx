import React from 'react';

const AppointmentHeader = ({ steps, currentStep, handleStepClick }) => {
  return (
    <div className="container mx-auto py-2">
      <h1 className="text-4xl font-bold mb-3">Add Appointment</h1>
      <div className="flex justify-center space-x-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`cursor-pointer flex flex-col items-center space-y-2 ${
              currentStep === index ? 'font-bold' : ''
            }`}
            onClick={() => handleStepClick(index)}
          >
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                index <= currentStep 
                  ? 'bg-purple-800 text-white' 
                  : 'bg-purple-200'
              }`}
            >
              {index <= currentStep && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              )}
            </div>
            <h2 className={`text-xl ${index <= currentStep ? 'font-bold text-purple-800' : ''}`}>
              {step.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentHeader;
