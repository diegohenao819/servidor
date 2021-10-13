import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';

const app=express();

// CONEXIÓN A BASE DE DATOS

const mongoose = require('mongoose'); 
// const uri = 'mongodb://localhost:27017/DiegoDB';
//"mongodb+srv://Nota-nueva:misiontic@cluster0.fxsz7.mongodb.net/DiegoDB?retryWrites=true&w=majority"//

// const uri='mongodb+srv://user_notas:A27034286j@cluster0.8evgs.mongodb.net/notas?retryWrites=true&w=majority';



// PROBANDO ALGO QUE VA A SALIR MAL

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Nota-nueva:misiontic@cluster0.fxsz7.mongodb.net/DiegoDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("DiegoDB").collection("notas");
  // perform actions on the collection object
  client.close();
});





const options = {useNewUrlParser: true,  useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) } 
);

//middleware (ANTES DE LAS RUTAS)
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); 
//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, 'public')));

//configurar las rutas

// app.get('/', function (req,res){
//     res.send('Hola mundo');
// });
app.use('/api', require('./routes/nota'));
app.use('/user', require('./routes/users'));
app.use('/login', require('./routes/login'));



// Middleware para VUE.JS ROUTINER MODO HISTORY
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));




//Puerto dinámico

app.set('/', process.env.PORT || 3000); 
app.listen(app.get('/'), function () { 
    console.log('Example app listening on port'+ app.get('/')); 
});