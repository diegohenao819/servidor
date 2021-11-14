import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const vocabularySchema=new Schema({

    englishWord:{type:String, required:[true,'English word required']},
    definition:String,
    date:{type:Date, default: Date.now},
    

});

//convertir a modelo
const Nota=mongoose.model('Vocabulary',vocabularySchema);
export default Nota;