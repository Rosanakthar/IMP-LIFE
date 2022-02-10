const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    },
    bloodGrp:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('User',userSchema);