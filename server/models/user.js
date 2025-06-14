const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const registerModel = mongoose.model("registerdUser", registerSchema);
module.exports = registerModel;
