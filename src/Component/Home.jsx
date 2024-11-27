import React, { useState } from 'react';
import AppointmentHeader from './Navbar';
import ComplaintSymptomsStep from './Dashboard';
import ExaminationsStep from './Examinations/Examination';
import InvestigationsStep from './Investigations/Investigation';
import DiagnosisStep from './Diagnosis';
import PlanStep from './Plan';

const AppointmentWorkflow = () => {
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const [comments, setComments] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Complaint & Symptoms' },
    { label: 'Examinations' },
    { label: 'Investigations' },
    { label: 'Diagnosis' },
    { label: 'Plan' }
  ];

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      <AppointmentHeader
        steps={steps}
        currentStep={currentStep}
        handleStepClick={setCurrentStep}
      />

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

      {currentStep === 1 && <ExaminationsStep handlePrevious={handlePrevious} handleNext={handleNext} />}
      {currentStep === 2 && <InvestigationsStep handlePrevious={handlePrevious} handleNext={handleNext} />}
      {currentStep === 3 && <DiagnosisStep handlePrevious={handlePrevious} handleNext={handleNext} />}
      {currentStep === 4 && <PlanStep handlePrevious={handlePrevious} />}
    </div>
  );
};

export default AppointmentWorkflow;
