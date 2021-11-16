const mongoose = require("mongoose");

const vocabularySchema = mongoose.Schema({
  
  englishWord: { type: String },
  definition: { type: String },
  email:{type:String},
  completed: { default: false },
});

module.exports = mongoose.model("Vocabulary", vocabularySchema);
