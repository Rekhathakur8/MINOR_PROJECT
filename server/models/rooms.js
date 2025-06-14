const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  hostelName: String,
  contactNumber: String,
  nearbyInstitute: String,
  address: String,
  price: String,
  image: String,
  roomType: String,
});

const roomModel = mongoose.model("newRooms", roomSchema);
module.exports = roomModel;
