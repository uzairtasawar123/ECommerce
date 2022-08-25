const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Method = require('./Routes/Route')
const Customer = require('./Routes/Route2')
/////////////////////////////////////
const app = express()
const port = 8000
////////////////////////////////////
app.use(express.json())
app.use(cors())
////////////////////////////////   Connecting DB   /////////////////////////////
mongoose.connect('mongodb://0.0.0.0:27017/Ecommerce', (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("DB connected successfully")
    }
})
////////////////////////////////   Routing      ///////////////////////////////////
app.use('/ecommerce' , Method)
app.use('/user' , Customer)
////////////////////////////////////
app.listen(port , ()=>{
    console.log(`We are listening on http://localhost:${port}`)
}) 