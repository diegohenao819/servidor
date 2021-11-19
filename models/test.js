const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  
  level: { type: String, default: 'A0' },
  //name: { type: String },
  email:{type:String, unique: true},
  //completed: { default: false },
});

module.exports = mongoose.model("Test", testSchema);
