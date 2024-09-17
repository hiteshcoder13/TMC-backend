

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/TMC").then(()=>{
    console.log("db success instiute")
}).catch((e)=>{
    console.log(e)
});

const instituteSchema = new mongoose.Schema({
    instituteId: { type: String, required: true },
    instituteName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true }, // Storing email as well
});

const Institute = mongoose.model('Institute', instituteSchema);

module.exports = Institute;