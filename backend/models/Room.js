const mongoose = require("mongoose");

const roomSchema =
new mongoose.Schema({

  name: String,

  price: Number,

  capacity: Number,

  amenities: [String],

  image: String

});

module.exports =
mongoose.model("Room", roomSchema);