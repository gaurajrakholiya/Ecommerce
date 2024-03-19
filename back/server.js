const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const { connectMongoDb } = require('./config/db')
const authRoute = require('./routes/authRoute.js')
const categoryRoute = require('./routes/categoryRoute.js')
const productRoute = require('./routes/productRoute.js')
const cors  = require('cors')
// const concurrently = require('concurrently')
// configure env
dotenv.config()  // in other directory use ({path:""})

//connect mongoose
connectMongoDb()

// rest object 
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))  //api request will be shown in console

//routes
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/product", productRoute)

// rest api
app.get('/',(req,res)=>{
    res.send("Hello It's me ")
})

//PORT
const PORT = process.env.PORT || 8080

// run listen
app.listen(PORT , () =>{
    console.log(`server running on ${PORT}` )
})
