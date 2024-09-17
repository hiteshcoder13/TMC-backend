const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://hiteshnagpal:Hunnynagpal%402006@cluster0.jzero.mongodb.net/TMC?retryWrites=true&w=majority").then(()=>{
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
