const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); 

const app = express();

app.use(express.json());
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/bookings", bookingRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("MongoDB ERROR:");
    console.log(err.message);
});

app.get("/", (req, res) => {
res.send("Hotel Booking API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});