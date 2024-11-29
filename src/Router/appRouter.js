import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentWorkflow from '../Component/Home';
import Appointment from '../Component/Appoitment';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppointmentWorkflow />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
