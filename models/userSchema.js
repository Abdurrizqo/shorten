const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    max: 60,
  },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  codeConfirmation: { type: String, unique: true },
  isConfirm: { type: Boolean, default: false },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
