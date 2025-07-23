
import React, { useEffect, useState } from 'react';
import {
  Table, TableRow, TableHead, TableBody, TableCell,
  TableContainer, Paper, Typography, Button, Box
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }

    axios.get('http://localhost:3001/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, [navigate]);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this appointment?")) {
      await axios.delete(`http://localhost:3001/api/appointments/${id}`);
      setAppointments(prev => prev.filter(app => app._id !== id));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          All Appointments
        </Typography>
        <Button color="error" variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Name</TableCell>
              <TableCell sx={{ color: '#fff' }}>Age</TableCell>
              <TableCell sx={{ color: '#fff' }}>Doctor</TableCell>
              <TableCell sx={{ color: '#fff' }}>Date</TableCell>
              <TableCell sx={{ color: '#fff' }}>Time</TableCell>
              <TableCell sx={{ color: '#fff' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map(app => (
              <TableRow key={app._id}>
                <TableCell>{app.name}</TableCell>
                <TableCell>{app.age}</TableCell>
                <TableCell>{app.doctorname}</TableCell>
                <TableCell>{app.date}</TableCell>
                <TableCell>{app.time}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => handleDelete(app._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminDashboard;