
const Appointment = require('../models/Appointment'); // Make sure this is imported

// POST /api/appointments
const createAppointment = async (req, res) => {
  const { name, age, doctorname, date, time } = req.body;

  try {
    // Check if the doctor is already booked for this date and time
    const existing = await Appointment.findOne({ doctorname, date, time });

    if (existing) {
      return res.status(409).json({ message: 'This time slot is already booked for this doctor.' });
    }

    // If not booked, create new appointment
    const newAppointment = new Appointment({ name, age, doctorname, date, time });
    await newAppointment.save();

    res.status(201).json({ message: 'Appointment booked successfully.' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error while booking appointment.' });
  }
};

module.exports = { createAppointment };

// ✅ Get Appointments (optionally filtered by name)
const getAppointments = async (req, res) => {
  try {
    const { name } = req.query;

    let query = {};
    if (name) query.name = name;

    const appointments = await Appointment.find(query);
    res.json(appointments);
  } catch (err) {
    console.error('❌ Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

// ✅ Delete Appointment
const deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('❌ Delete error:', err);
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
};

// ✅ Update Appointment
const updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: 'Failed to update' });
  }
};

// ✅ Export all functions properly
module.exports = {
  createAppointment,
  getAppointments,
  deleteAppointment,
  updateAppointment
};
