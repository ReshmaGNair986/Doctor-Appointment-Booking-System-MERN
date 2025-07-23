

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  doctorname: String,
  date: String,
  time: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
