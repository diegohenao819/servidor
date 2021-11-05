const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todo: { type: String },
  text: { type: String },
  completed: { Boolean },
});

module.exports = mongoose.model("Todo", todoSchema);
