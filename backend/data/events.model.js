const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  lesson: String,
  date: Date,
  description: String
});

module.exports = mongoose.model("EventsModel", UserSchema);
