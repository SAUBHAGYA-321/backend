import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema({
  title:String,
  docs:String,
  isdonde:Boolean
});
export const todo =  mongoose.model('todo', todoschema);
