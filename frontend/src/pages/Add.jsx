
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper
} from '@mui/material';

const Add = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctorFromState = location.state?.doctorname || '';

  const [form, setForm] = useState({
    name: '',
    age: '',
    doctorname: doctorFromState,
    date: '',
    time: ''
  });

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      doctorname: doctorFromState
    }));
  }, [doctorFromState]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/appointments", form);

      if (res.status === 201) {
        alert(res.data.message);
        navigate("/dashboard"); // Redirect after success
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("⚠️ This time slot is already booked. Please choose another.");
      } else {
        console.error("Booking error:", err);
        alert("❌ Failed to book appointment. Try again.");
      }
    }
  };

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
        px: 2
      }}
    >
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100%' }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 2,
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            <Typography variant="h5" mb={3} textAlign="center" fontWeight={600}>
              Book Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Age"
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Doctor"
                    name="doctorname"
                    value={form.doctorname}
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Time"
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Confirm Appointment
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Add;

