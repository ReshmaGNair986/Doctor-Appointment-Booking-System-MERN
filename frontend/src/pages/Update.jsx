
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state;



const [form, setForm] = useState({
  _id: '',
  name: '',
  age: '',
  doctorname: '',
  date: '',
  time: ''
});
  const [doctorList, setDoctorList] = useState([
    'Dr. Sarah Johnson',
    'Dr. Michael Chen',
    'Dr. Emily Rodriguez',
    'Dr. David Kim',
    'Dr. Lisa Thompson',
    'Dr. James Wilson'
  ]);

//   useEffect(() => {
//     if (appointmentData) {
//       setForm(appointmentData);
//     }
//   }, [appointmentData]);
useEffect(() => {
  if (appointmentData) {
    console.log("Received data for update:", appointmentData);
    setForm(appointmentData);
  }
}, [appointmentData]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/api/appointments/${form._id}`, form);
      alert("✅ Appointment updated successfully");
      navigate("/view");
    } catch (err) {
      console.error("❌ Update error:", err);
      alert("Failed to update appointment.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h5">Update Appointment</Typography>
      <br />
      <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth />
      <br /><br />
      <TextField label="Age" name="age" value={form.age} onChange={handleChange} fullWidth />
      <br /><br />
      <TextField label="Doctor Name" name="doctorname" value={form.doctorname} onChange={handleChange} fullWidth />
      <br /><br />
      <TextField type="date" label="Date" name="date" value={form.date} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
      <br /><br />
      <TextField type="time" label="Time" name="time" value={form.time} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
      <br /><br />
      <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
    </div>
  );
};

export default Update;
