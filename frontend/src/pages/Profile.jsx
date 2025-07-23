
import { Button, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const [updatedUser, setUpdatedUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setUser(parsedProfile);
      setUpdatedUser(parsedProfile);
    }
  }, []);

  // ✅ Update profile data
  const onUpdate = () => {
    localStorage.setItem('userProfile', JSON.stringify(user));
    setUpdatedUser(user);
    alert("✅ Profile updated and saved!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  // ✅ Logout and redirect
  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('loggedInUserName');
    localStorage.removeItem('userProfile');

    // Let other components know about logout (optional)
    window.dispatchEvent(new Event("loginStatusChanged"));

    navigate('/');
    window.location.reload(); // hard refresh
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
            px: 2,
            backgroundColor: 'white'
          }}
        >
    {/* <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
    

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '12px',
          minWidth: '300px',
          marginBottom: '2rem'
        }}
      > */}
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
        <Typography variant="h5" gutterBottom>Your Profile</Typography>

        <TextField
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Address"
          name="address"
          value={user.address}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button variant="contained" color="secondary" fullWidth onClick={onUpdate}>
          Update
        </Button><br />
     
        {/* ✅ Logout button on top right */}
      {/* <Box sx={{ position: 'absolute', top: 16, right: 16 }}> */}
      <Box>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      {/* ✅ Show updated values */}
      {updatedUser && (
        <Box
          sx={{
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '10px',
            textAlign: 'left',
            width: '300px'
          }}
        >
          <Typography variant="h6">Updated Details:</Typography>
          <Typography><strong>Name:</strong> {updatedUser.name}</Typography>
          <Typography><strong>Address:</strong> {updatedUser.address}</Typography>
          <Typography><strong>Email:</strong> {updatedUser.email}</Typography>
          <Typography><strong>Phone:</strong> {updatedUser.phone}</Typography>
        </Box>
        
      )}
      </div>
      </div>
    </Box>
   
 
    
  );
};

export default Profile;
