const mongoose = require('mongoose') ;
const USER = require("./user.models") ;

const studentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"USER"
    },
    insitutionType:{
        type:String ,
        enum :['School','College'] ,
        required:true
    },
    major:{
        type : String,
        required : true ,
    }
}) ;

module.exports = mongoose.model('STUDENT',studentSchema) ;