
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [checkedAuth, setCheckedAuth] = useState(false); // 🔹 New state

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUserName");

    // ✅ Delay check to avoid early redirect before localStorage is set
    setTimeout(() => {
      if (!loggedInUser) {
        alert("Please login to access the dashboard.");
        navigate("/login");
      } else {
        setCheckedAuth(true); // ✅ User is logged in
      }
    }, 100); // small delay (100ms)
  }, [navigate]);

  // 🔒 Block UI render until auth check is complete
  if (!checkedAuth) return null;

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220626/pngtree-smiling-female-doctor-showing-thumbs-up-healthcare-stethoscope-appointment-photo-image_18916306.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: 'white'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#000000ff',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '4px',
          lineHeight: '2.5rem',
          marginTop: '-10rem'
        }}
      >
        Welcome to the Doctor Appointment Dashboard
      </Typography>

      <div className="dashboard-cards" style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div className="dashboard-card" style={{ flex: 1, padding: '1rem', border: '1px solid #eee', borderRadius: '8px', background: '#fafafa' }}>
          <h2>Appointments</h2>
          <p>View and manage your upcoming appointments.</p>
          <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/view')}>View</Button>
        </div>

        <div className="dashboard-card" style={{ flex: 1, padding: '1rem', border: '1px solid #eee', borderRadius: '8px', background: '#fafafa' }}>
          <h2>Doctors</h2>
          <p>Browse and find your doctors.</p>
          <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/doctors')}>Find Doctors</Button>
        </div>

        <div className="dashboard-card" style={{ flex: 1, padding: '1rem', border: '1px solid #eee', borderRadius: '8px', background: '#fafafa' }}>
          <h2>Profile</h2>
          <p>Update your personal information and settings.</p>
          <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/profile')}>Update</Button>
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
