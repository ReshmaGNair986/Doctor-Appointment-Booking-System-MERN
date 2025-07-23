
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("loggedInUserName"); // ✅ Get the name
    if (!name) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    axios.get(`http://localhost:3001/api/appointments?name=${name}`) // ✅ Pass name in query
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.error("Error fetching appointments:", err);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this appointment?")) {
      try {
        await axios.delete(`http://localhost:3001/api/appointments/${id}`);
        setAppointments((prev) => prev.filter((appt) => appt._id !== id));
      } catch (err) {
        console.error("Delete failed", err);
      }
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4">Your Appointments</Typography>
      {appointments.length === 0 ? (
        <Typography>No appointments found.</Typography>
      ) : (
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
              {appointments.map((app) => (
                <TableRow key={app._id}>
                  <TableCell>{app.name}</TableCell>
                  <TableCell>{app.age}</TableCell>
                  <TableCell>{app.doctorname}</TableCell>
                  <TableCell>{app.date}</TableCell>
                  <TableCell>{app.time}</TableCell>
                  <TableCell>
                    <Button color="error" variant="outlined" onClick={() => handleDelete(app._id)}>
                      Delete
                    </Button>
                    &nbsp;
                    <Button color="primary" variant="outlined" onClick={() => navigate('/update', { state: app })}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default View;
