const express = require("express")
const router = express.Router()

const Todos = require("../models/todoModel")


router.get("/todos", (req, res) => {
    console.log(req)
    Todos.find((err, todos) => {
        if(err){
            res.status(404).json({ message: "Get Todos Error", errors: `${err}` })
        } else {
            res.status(200).json(todo)
        }
    })
})

router.get("/todo/:id", (req, res) => {
    Todos.findById(req.params.id, (err, todo => {
        if(err){
            res.status(404).json({ message: "Could not get Todo", errors: `${err}`})
        }else {
            res.status(200).json(todos)
        }
    }))
})

router.post("/todo", (req, res) => {
    const todo = new Todos(req.body)

    todo
        .save()
        .then(todo => {
            res.status(200).json(todo)
        })
        .catch(err => {
            res.status(400).json({ message: "unable to post", erros: `${err}` })
        })
})
module.exports = router