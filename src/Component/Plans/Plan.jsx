import React, { useState } from 'react';
import AddNewPlanModal from './Modal/modal';

const Plan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plans, setPlans] = useState([]);

  const handleSavePlan = (newPlanData) => {
    setPlans([...plans, newPlanData]);
    setIsModalOpen(false);
  };

  const handleRemovePlan = (planToRemove) => {
    setPlans(plans.filter(plan => plan !== planToRemove));
  };

  return (
    <div className="w-3/4 mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-left">Plan</h2>
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          Add Plan
        </button>
      </div>

      {plans.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded-lg px-4 py-2 flex flex-col gap-1"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{plan.medicineName}</span>
                  <button
                    onClick={() => handleRemovePlan(plan)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="text-md items-center text-gray-600 mx-auto max-w-md text-left">
                  <p>Diagnosis: {plan.diagnosis}</p>
                  <p>Medicine: {plan.medicineName}</p>
                  <p>{plan.mg} - {plan.duration}</p>
                  <p>Time: {plan.medicationTime.join(', ')}</p>
                  <p>Take: {plan.timingOption.join(', ')}</p>
                  {plan.importantNote && <p>Note: {plan.importantNote}</p>}
                </div>


              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && (
        <AddNewPlanModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSavePlan}
        />
      )}
    </div>
  );
};

export default Plan;

