require("dotenv").config();
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/connectDb")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 1200
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/tasks", require("./routes/taskRouter"))
app.use("/api/articles", require("./routes/articleRouter"))

app.get("/", (req, res) => {
    res.send("home page")
})


mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log(`server run on port ${PORT}`)
    })
})

mongoose.connection.on('error',err=>{
    console.log(err)
})

