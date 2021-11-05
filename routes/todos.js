const express = require("express");

const router = express.Router();

const todoSchema = require("../models/todo");

import Todo from "../models/todo";

// POST
router.post("/todos", (req, res) => {
  const todo = todoSchema(req.body);
  todo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// GET ALL
router.get("/todos", (req, res) => {
  todoSchema

    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// GET ONE TO-DO
router.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  todoSchema

    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// UPDATE
router.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  todoSchema

    .updateOne({ _id: id }, { $set: { todo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// ELIMINARwe
router.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todoSchema

    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// CON LA PROFE GRACE
// router.post('/todos', async(req, res)=>{

//     const body = req.body;
//     try {

//         const todoDB= await todo.create(body);
//         res.status(200).json(todoDB);

//     } catch (error) {

//         return res.status(500).json({

//             mensaje:'Ocurrio un error',
//             error
//         })

//     }

//     });

module.exports = router;
