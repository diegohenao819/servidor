const express = require("express");

const router = express.Router();

const todoSchema = require("../models/todo");
const vocabularySchema = require("../models/vocabulary");
import Todo from "../models/todo";

// POST
router.post("/vocabulary", (req, res) => {
  const vocabulary = vocabularySchema(req.body);
  vocabulary
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



// GET ALL
router.get("/vocabulary", (req, res) => {
  vocabularySchema

    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});





// GET ONE TO-DO
router.get("/vocabulary/:id", (req, res) => {
  const { id } = req.params;
  vocabularySchema

    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// UPDATE
router.put("/vocabulary/:id", (req, res) => {
  const { id } = req.params;
  const { englishWord, definition } = req.body;
  vocabularySchema

    .updateOne({ _id: id }, { $set: { englishWord,definition } })
    .then((data) => res.json(data)).then(res.send("se actualizó: " + englishWord))
    .catch((error) => res.json({ message: error }));
});

// ELIMINARwe
router.delete("/vocabulary/:id", (req, res) => {
  const { id } = req.params;
  vocabularySchema

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
