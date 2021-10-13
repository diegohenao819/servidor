const express = require('express');
const router = express.Router();

// Importamos modelo Tarea
import User from '../models/user';

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Filtrar campos de PUT
const _ = require('underscore');

// importamos el modelo Autenticador
const {verificarAuth} = require('../middlewares/autenticacion.js');


router.post('/nuevo-usuario', async (req, res) => {

  const body = {
    nombre: req.body.nombre,
    email: req.body.email,
    role: req.body.role
  }

  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

  try {

    const userDB = await User.create(body);

    return res.json({userDB, mensaje:'Usuario creado exitosamente'});
    
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

});

/* GET users listing. */
router.get('/usuario', async(req, res) => {
  res.send('respond with a resource');
});

router.put('/usuario/:id', async(req, res) => {

  let id = req.params.id;
  let body = _.pick(req.body, ['nombre', 'email', 'role', 'pass']);
  if(body.pass){
    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  }

  try {
    // {new:true} nos devuelve el usuario actualizado
    const usuarioDB = await User.findByIdAndUpdate(id, body, {new: true, runValidators: true});

    return res.json(usuarioDB);

  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }

});

router.delete('/usuario/:id', async(req, res) => {

  let id = req.params.id;

  try {

    const usuarioDelete = await User.findByIdAndRemove(id);

    if(!usuarioDelete){
      return res.status(400).json({
        mensaje: 'Usuario no encontrado'
      })
    }

    return res.json(usuarioDelete);
    
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }

});

module.exports = router;