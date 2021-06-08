const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    required: false,
  },
  birthday: {
    type: Date,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
});

const info = mongoose.model("Info", infoSchema);

module.exports = info;
