// create an express application
const express = require('express')
const app = express()

// middleware to parse json objects
app.use(express.json())

// loads environment variables into current process 
const dotenv = require('dotenv')
dotenv.config()

// secures APIs bypassing access origin headers
const cors = require('cors')
app.use(cors())

// initialize app to listen to environment's port
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`)
})

// establish connection with atlas database
const mongoose = require('mongoose')
mongoose.connect(process.env.ATLAS_URL)
    .then(() => console.log("Connection with database established successfully"))
    .catch((err) => console.log(`${err}Connection with database failed`))


// routing
const accountRouter = require('./routes/account')
app.use('/apis/account/', accountRouter)

const userRouter = require('./routes/user')
app.use('/apis/users/', userRouter)