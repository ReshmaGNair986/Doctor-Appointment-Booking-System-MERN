
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:'',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name,email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // ✅ Save user to localStorage
    // localStorage.setItem("registeredUser", JSON.stringify({ email, password }));
    localStorage.setItem('loggedInUserName', form.name);


    alert("Signup successful! Redirecting to login...");
    navigate("/login"); // ✅ Go to login page
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
          <h1>Signup Page</h1>
            <TextField
            label="Name"
            name="name"
            variant="filled"
            fullWidth
            value={form.name}
            onChange={handleChange}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Email"
            name="email"
            variant="filled"
            fullWidth
            value={form.email}
            onChange={handleChange}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="filled"
            fullWidth
            value={form.password}
            onChange={handleChange}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="filled"
            fullWidth
            value={form.confirmPassword}
            onChange={handleChange}
            style={{ marginBottom: '1.5rem' }}
          />
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Sign Up
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Signup;
