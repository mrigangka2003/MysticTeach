const mongoose = require('mongoose') ;
const USER = require("./user.models") ;

const teacherSchema = new mongoose.Schema({
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:USER,
        required: true,
    },
    subjectTaught :{
        type:String ,
        required:true,
        lowercase : true ,
    },
    fees:{
        type:Number ,
        required : true 
    },
    batches:{
        number:{
            type:Number,
            default:1,
            required : true 
        },
        time :{
            type :Date ,
            required : true 
        },
        status :{
            type : Boolean,
            // if true that means student can grab a sit 
            default: true ,
            required: true 
        },
        days:{
            type:String,
            required:true ,
            lowercase:true, 
        }
    },
    rating:{
        rateNum:{
            type:Number,
            enum:[1,2,3,4,5],
        },
        comment:{
            type:String,
            required:true 
        }
    }
}) ;

module.exports = mongoose.model("TEACHER",teacherSchema) ;
