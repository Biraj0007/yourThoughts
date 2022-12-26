import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
   // String is shorthand for {type: String}
  author: String,
  email: String,
  comments: [{ body: String, date: Date }], 
  date: { type: Date, default: Date.now }, 
  meta: {
    votes: Number,
    favs:  Number
  }
});