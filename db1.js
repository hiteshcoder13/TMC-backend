const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/TMC").then(()=>{
    console.log("db success")
}).catch((e)=>{
    console.log(e)
});


const schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

const collection1 = new mongoose.model("collection1",schema)
module.exports = collection1;