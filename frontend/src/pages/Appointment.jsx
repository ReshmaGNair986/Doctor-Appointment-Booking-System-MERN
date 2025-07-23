import React from 'react';

import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const Appointment = () => {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/appointment')
      .then((res) => setAppointment(res.data))
      .catch((err) => console.error("Failed to fetch appointment:", err));
  }, []);

  const handleView = (id) => {
    // Navigate or open modal
    console.log(`Viewing appointment ${id}`);
  };

  return (
    <div>
      {appointment.map((appt) => (
        <Card key={appt._id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{item.doctorName || "Doctor"}</Typography>
          
             <Typography>Name: {item.name}</Typography>
            <Typography>Date: {item.date}</Typography>
            <Typography>Time: {item.time}</Typography>
            <Button variant="outlined" onClick={() => handleView(appt._id)}>View</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Appointment;
