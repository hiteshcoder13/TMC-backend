const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://hiteshnagpal:Hunnynagpal%402006@cluster0.jzero.mongodb.net/TMC?retryWrites=true&w=majority").then(()=>{
    console.log("db success")
}).catch((e)=>{
    console.log(e)
});

const packetSchema = new mongoose.Schema({
    packetNo: { type: String, required: true },
    subject: { type: String, required: true },
    numberOfCopies: { type: Number, required: true },
    subjectCode: { type: String, required: true },
    branch: { type: String, required: true },
    instituteId: { type: String, required: true },
    email: { type: String, required: true },
  });
  
  const Packet = mongoose.model('Packet', packetSchema);
  module.exports = Packet;
