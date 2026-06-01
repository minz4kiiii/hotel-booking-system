const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  userEmail: String,

  room: String,

  price: Number,

  checkIn: String,

  checkOut: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Booking", bookingSchema);