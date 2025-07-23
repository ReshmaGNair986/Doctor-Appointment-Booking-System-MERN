
import { Box, Button, TextField, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // ✅ Added useNavigate
import axios from 'axios';

const Book = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Initialize navigate
  const doctorFromState = location.state?.doctorname || '';
  const loggedInUserName = localStorage.getItem('loggedInUserName');

  const [form, setForm] = useState({
    name: loggedInUserName || '',
    age: '',
    doctorname: doctorFromState || '',
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

  useEffect(() => {
    if (doctorFromState) {
      setForm(prev => ({ ...prev, doctorname: doctorFromState }));
    }
  }, [doctorFromState]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = async () => {
    const { name, age, doctorname, date, time } = form;

    if (!name || !age || !doctorname || !date || !time) {
      alert("❌ Please fill in all the fields.");
      return;
    }


try {
  console.log("📤 Sending booking:", form);

  const res = await axios.post("http://localhost:3001/api/appointments", {
     name,
      age,
      doctorname,
      date: date,           // YYYY-MM-DD
      time: time.slice(0, 5) // HH:mm
  });
  if (res.status === 201) {
    alert(res.data.message);
    navigate("/view");  // or dashboard
  }
} catch (err) {
  if (err.response?.status === 409) {
    alert("⚠️ This time slot for this doctor is already booked. Please select a different time or date.");
  } else {
    alert("❌ Failed to book appointment. Please try again later.");
  }
}
  }
  return (
    <Box
      sx={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/012/926/160/non_2x/stethoscope-with-calendar-page-date-on-blue-background-doctor-appointment-medical-concept-photo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        backgroundColor: 'white'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          minWidth: '300px',
          backgroundColor: 'white'
        }}>
          <h1>Booking Appointment</h1><br />

          <TextField
            variant="outlined"
            label="Name"
            name="name"
            value={form.name}
            fullWidth
            InputProps={{ readOnly: true }}
            style={{ marginBottom: '1rem' }}
          />

          <TextField
            variant="outlined"
            label="Age"
            name="age"
            value={form.age}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '1rem' }}
          />

          <TextField
            select
            label="Select Doctor"
            name="doctorname"
            value={form.doctorname}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '1rem' }}
          >
            {doctorList.map((doc, index) => (
              <MenuItem key={index} value={doc}>
                {doc}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            variant="outlined"
            label="Date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            style={{ marginBottom: '1rem' }}
          />

          <TextField
            variant="outlined"
            label="Time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            style={{ marginBottom: '1rem' }}
          />

          <Button variant="contained" color="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Book;
