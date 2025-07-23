
const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  deleteAppointment,
  updateAppointment, // ✅ make sure this is imported
} = require('../controllers/appointmentController');

router.post('/', createAppointment);
router.get('/', getAppointments);
router.delete('/:id', deleteAppointment);

// ✅ This should exist
router.put('/:id', updateAppointment);

module.exports = router;
