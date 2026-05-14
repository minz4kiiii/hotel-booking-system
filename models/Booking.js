const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  room: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true }
});

module.exports = mongoose.model("Booking", bookingSchema);