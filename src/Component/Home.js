import React, { useState } from 'react';
import AppointmentHeader from './Navbar';
import ComplaintSymptomsStep from './Complaints/Complaint';
import ExaminationsStep from './Examinations/Examination';
import InvestigationsStep from './Investigations/Investigation';
import DiagnosisStep from './Diagnosis/Diagnosis';
import PlanStep from './Plans/Plan';
import Next from './next';

const AppointmentWorkflow = () => {
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const [selectedExamination, setSelectedExamination] = useState([]);
  const [selectedInvestigations, setSelectedInvestigations] = useState([]); 
  const [selectedDiagnosis, setSelectedDiagnosis] = useState([]);
  const [complaintComments, setComplaintComments] = useState('');
  const [examinationComments, setExaminationComments] = useState('');
  const [investigationNotes, setInvestigationNotes] = useState('');
  const [diagnosisComments, setDiagnosisComments] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [showValidation, setShowValidation] = useState(false);

  const steps = [
    { label: 'Complaint & Symptoms' },
    { label: 'Examinations' },
    { label: 'Investigations' },
    { label: 'Diagnosis' },
    { label: 'Plan' },
  ];

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowValidation(false);
    }
  };

  const handleNext = () => {
    setShowValidation(true);
    if (currentStep === 0 && (complaintComments.trim() === '' || selectedComplaints.length === 0)) {
      return;
    }
    if (currentStep === 1 && (examinationComments.trim() === '' || selectedExamination.length === 0)) {
      return;
    }
    if (currentStep === 2 && (investigationNotes.trim() === '' || selectedInvestigations.length === 0)) {
      return;
    }
    if (currentStep === 3 && (diagnosisComments.trim() === '' || selectedDiagnosis.length === 0)) {
      return;
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowValidation(false);
    }
  };

  return (
    <div className="relative h-full">
      <AppointmentHeader
        steps={steps}
        currentStep={currentStep}
        handleStepClick={setCurrentStep}
      />
      <div className="p-6">
        {currentStep === 0 && (
          <ComplaintSymptomsStep
            selectedComplaints={selectedComplaints}
            setSelectedComplaints={setSelectedComplaints}
            complaintComments={complaintComments}
            setComplaintComments={setComplaintComments}
            showValidation={showValidation}
            handleRemoveComplaint={(complaint) =>
              setSelectedComplaints(selectedComplaints.filter((c) => c !== complaint))
            }
          />
        )}
        {currentStep === 1 && (
          <ExaminationsStep 
            selectedExamination={selectedExamination}
            setSelectedExamination={setSelectedExamination}
            examinationComments={examinationComments}
            setExaminationComments={setExaminationComments}
            showValidation={showValidation}
          />
        )}
        {currentStep === 2 && (
          <InvestigationsStep
            selectedInvestigations={selectedInvestigations}
            setSelectedInvestigations={setSelectedInvestigations}
            investigationNotes={investigationNotes}
            setInvestigationNotes={setInvestigationNotes}
            showValidation={showValidation}  
          />
        )}
        {currentStep === 3 && (
          <DiagnosisStep
            selectedDiagnosis={selectedDiagnosis}
            setSelectedDiagnosis={setSelectedDiagnosis}
            diagnosisComments={diagnosisComments}
            setDiagnosisComments={setDiagnosisComments}
            handleRemoveDiagnosis={(diagnosis) =>
              setSelectedDiagnosis(selectedDiagnosis.filter((d) => d !== diagnosis))
            }
          />
        )}
        {currentStep === 4 && <PlanStep />}
      </div>

      <div className="fixed w-full">
        <div className="container ml-60 p-4 flex">
          <Next
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            currentStep={currentStep}
            complaintComments={complaintComments}
            examinationComments={examinationComments}
            investigationNotes={investigationNotes}
            diagnosisComments={diagnosisComments}
            selectedComplaints={selectedComplaints}
            selectedExamination={selectedExamination}
            selectedInvestigations={selectedInvestigations}
            selectedDiagnosis={selectedDiagnosis}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentWorkflow;


