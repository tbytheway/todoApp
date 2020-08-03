const express =  require("express")
const mongoose = require('mongoose')

const app = express()
const port = 4000

const todoRoutes = require("./routes/todoRoutes")

mongoose.connect("mongodb://localhost:27017/express-todo", {useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true}, (err) => {
    if(err){
        console.log(`DB connection err: ${err}`)
    }else {
        console.log("DB connected!")
    }
})

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    res.status(200).send(",h1>Hello from Express</h1>")
})

app.use("/", todoRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

