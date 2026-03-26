import mongoose from "mongoose"; 
import express from "express";  
import { todo } from "./TODO.js";            
let conn =await mongoose.connect("mongodb://localhost:27017/todo.js");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const newtodo = new todo({
        title   :"first todo",
        docs:"this is my first todo",
        isdone:false
    })
    todo.save();
    
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
