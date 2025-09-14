const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv').config();
const hello=require('./config/config')
const app=express();
hello();
app.use(cors())
app.use(express.json())


app.listen(5174,()=>{
    console.log("CHALAL DIAA LADLEEE")
})
