const express = require("express");

const router = express.Router();

const User =
require("./models/User");
const Booking = require("./models/Booking");

//signup
router.post("/signup", async (req, res) => {

  try {

    const existing =
      await User.findOne({
        email: req.body.email
      });

    if (existing) {

      return res.status(400).json({
        message: "Email already exists"
      });

    }

    const user =
      new User(req.body);

    await user.save();

    res.json({
      message: "Signup successful"
    });

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

});

//login
router.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({
      email: req.body.email
    });

    if (!user) {

      return res.status(404).json({
        message: "No account found"
      });

    }

    if (user.password !== req.body.password) {

      return res.status(400).json({
        message: "Invalid password"
      });

    }

    res.json({
      message: "Login successful"
    });

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

});
router.post("/book", async (req, res) => {

  try {

    const booking = new Booking({
      userEmail: req.body.userEmail,
      roomName: req.body.roomName,
      price: req.body.price,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut
    });

    await booking.save();

    res.json({
      message: "Booking successful"
    });

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

});


module.exports = router;