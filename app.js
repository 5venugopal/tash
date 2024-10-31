const express = require('express');
const dotEnv =require('dotenv');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const pgRoutes = require('./routes/pgRoutes')
const app =express();
const port = process.env.port || 3000;

dotEnv.config()
app.use(bodyparser.json)
mongoose.connect("mongodb+srv://venugopalreddyankinapalli101:W3WDTQIoUmT0g19x@cluster0.jth13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use('/pgs', pgRoutes)

//middleware to parse json bodies
//app.use(express.json());

//smaple route
app.get('/pgManagement', (req, res)=>{
    res.send('hello world')
});

//start the server
app.listen(port, ()=>{
    console.log(`server running at ${port}`)
});

