

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/TMC").then(()=>{
    console.log("db success")
}).catch((e)=>{
    console.log(e)
});

const assignmentSchema = new mongoose.Schema({
    assignmentId: { type: String, required: true },
    packetNo: { type: String, required: true },
    checkerId: { type: String, required: true },
    issueDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    email: { type: String, required: true } // Storing email as well
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;