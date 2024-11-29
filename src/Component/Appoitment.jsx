import React, { useState } from "react";

const Appointment = () => {
  const [appointmentType, setAppointmentType] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      appointmentType,
      department,
      date,
      time,
      description,
    });
  };

  return (
    <div className="p-6 mt-16 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={handleSubmit}
        >
          CheckOut
        </button>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Make Appointment
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">Appointment Type</h2>
      <select
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
        value={appointmentType}
        onChange={(e) => setAppointmentType(e.target.value)}
      >
        <option value="">Select Type</option>
        <option value="regular">Regular Checkup</option>
        <option value="followup">Follow-up Visit</option>
        <option value="emergency">Emergency</option>
      </select>

      <h2 className="text-xl font-bold mb-4">Select Department</h2>
      <select
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        <option value="cardiology">Cardiology</option>
        <option value="neurology">Neurology</option>
      </select>

      <h2 className="text-xl font-bold mb-4">Select Patient's requested Date and Time</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
        <input
          type="time"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <h2 className="text-xl font-bold mb-4">Description</h2>
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 h-32"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter appointment details or special requirements..."
      ></textarea>
    </div>
  );
};

export default Appointment;

