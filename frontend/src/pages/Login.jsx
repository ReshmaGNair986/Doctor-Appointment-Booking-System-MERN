
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Logined Successfully");
    if (form.password === form.confirmPassword) {
  localStorage.setItem("loggedInUserName", form.name); // ✅ Save name
  navigate("/dashboard");
}


//     // ✅ Save login state
//     localStorage.setItem("loggedInUser", JSON.stringify({
//   email: form.email,
//   password: form.password
// }));
localStorage.setItem("loggedInUserName", form.name);  // ✅ Store the name


    // ✅ Navigate to signup (not dashboard yet)
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        height: '100vh',
       
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/012/926/160/non_2x/stethoscope-with-calendar-page-date-on-blue-background-doctor-appointment-medical-concept-photo.jpg')`,
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
        <h1>Login Page</h1>
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
          Submit
        </Button>
      </div>
    </div>
    </Box>
  );
};

export default Login;

