const mongoose = require('mongoose') ;
const USER = require("./user.models") ;

const studentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"USER"
    },
    password :{
        type:String,
        required : true 
    },
    insitutionType:{
        type:String ,
        enum :['School','College'] ,
        required:true
    }
})