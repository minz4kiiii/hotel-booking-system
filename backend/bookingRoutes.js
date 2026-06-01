const express = require("express");
const router = express.Router();

const Booking = require("./models/Booking");

router.post("/", async (req, res) => {
  try {

    const overlapping = await Booking.find({
      room: req.body.room
    });

    if (overlapping.length >= 3) {
      return res.status(400).json({
        message: "Room is FULL for selected dates"
      });
    }

    const booking = new Booking({
      userEmail: req.body.userEmail,
      room: req.body.room,
      price: req.body.price,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut
    });

    await booking.save();

    res.json({
      message: "Booking successful"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server error"
    });

  }
});

router.get("/", async (req, res) => {
  try {

    const bookings = await Booking.find();
    res.json(bookings);

  } catch (err) {
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;