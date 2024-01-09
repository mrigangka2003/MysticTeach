const mongoose = require("mongoose") ;


const UserSchema = new mongoose.Schema({
    name:{
        type : String ,
        required : true 
    },
    email:{
        type:String ,
        required: true ,
        unique : true 
    },
    username:{
        type:String ,
        required: true ,
        unique : true ,
        lowercase :true
    },
    city:{
        type : String ,
        required : true ,
        lowercase : true 
    },
    usertype:{
        type : String ,
        enum : ['teacher' , 'student'],
        required : true
    },
    password:{
        type:String,
        required:true 
    }
})

module.exports = mongoose.model("USER",UserSchema) ;