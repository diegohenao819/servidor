const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  
  text: { type: String },
  completed: { default: false },
});

module.exports = mongoose.model("Todo", todoSchema);
