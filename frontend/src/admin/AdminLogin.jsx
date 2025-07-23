
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic hardcoded check (replace with backend API in real apps)
    if (form.username === 'nehareshma' && form.password === 'abidon') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin/admindashboard');
    } else {
      alert('❌ Invalid admin credentials');
    }
  };

  return (
    <Box
          sx={{
            height: '100vh',
            backgroundImage: `url('https://images.pexels.com/photos/7580258/pexels-photo-7580258.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              borderRadius: '12px',
              minWidth: '300px',
              backgroundColor: 'white'
            }}>
    <Box sx={{ width: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Admin Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
       </Box>
      </div>
      </div>
      </Box>
 
  );
};

export default AdminLogin;
