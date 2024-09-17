
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/TMC").then(()=>{
    console.log("db success")
}).catch((e)=>{
    console.log(e)
});

const checkerSchema = new mongoose.Schema({
    checkerId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  });
  
  const Checker = mongoose.model('Checker', checkerSchema);
  module.exports = Checker;