require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

//mongodv

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

//models

const Room =
require("./models/Room");

//routes

const bookingRoutes =
require("./bookingRoutes");

const userRoutes =
require("./userRoutes");

app.use("/bookings", bookingRoutes);

app.use("/users", userRoutes);

//room routes

//to get rooms
app.get("/rooms", async (req, res) => {

  try {

    const rooms =
      await Room.find();

    res.json(rooms);

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

});

//add rooms

app.post("/rooms", async (req, res) => {

  try {

    const room =
      new Room(req.body);

    await room.save();

    res.json({
      message: "Room added"
    });

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

});

//home

app.get("/", (req, res) => {

  res.send("SuiteSpot API Running 🚀");

});

//server

app.listen(5000, () => {

  console.log("Server running on port 5000");

});