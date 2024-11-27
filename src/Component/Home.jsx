import React, { useState } from 'react';
import AppointmentHeader from './Navbar';
import ComplaintSymptomsStep from './Dashboard';
import ExaminationsStep from './Examinations/Examination';
import InvestigationsStep from './Investigations/Investigation';
import DiagnosisStep from './Diagnosis';
import PlanStep from './Plan';
import Next from './next';

const AppointmentWorkflow = () => {
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const [comments, setComments] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Complaint & Symptoms' },
    { label: 'Examinations' },
    { label: 'Investigations' },
    { label: 'Diagnosis' },
    { label: 'Plan' },
  ];

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="relative min-h-screen">
      <AppointmentHeader
        steps={steps}
        currentStep={currentStep}
        handleStepClick={setCurrentStep}
      />
      <div className="p-6">
        {currentStep === 0 && (
          <ComplaintSymptomsStep
            currentStep={currentStep}
            setSelectedComplaints={setSelectedComplaints}
            selectedComplaints={selectedComplaints}
            comments={comments}
            setComments={setComments}
            handleRemoveComplaint={(complaint) =>
              setSelectedComplaints(selectedComplaints.filter((c) => c !== complaint))
            }
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        )}
        {currentStep === 1 && <ExaminationsStep />}
        {currentStep === 2 && <InvestigationsStep />}
        {currentStep === 3 && <DiagnosisStep />}
        {currentStep === 4 && <PlanStep />}
      </div>

      <div className="fixed w-full">
        <div className="container ml-60 p-4 flex ">
          <Next
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            comments={comments}
            selectedComplaints={selectedComplaints}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentWorkflow;
