const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://hiteshnagpal:Hunnynagpal%402006@cluster0.jzero.mongodb.net/TMC?retryWrites=true&w=majority").then(()=>{
    console.log("db success")
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
