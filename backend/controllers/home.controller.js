const mongoose = require('mongoose') ;
const USER = require('../models/user.models') ;
const STUDENT = require('../models/student.models.js') ;
const TEACHER = require('../models/teacher.models.js') ;

const getHome = async(req,res)=>{
    try{
        const city = req.user.city ;
        const teacherIncity = await USER.find({usertype:'teacher', city: city})
        res.status(200).json(teacherIncity);
    }catch(err){
        console.error(err) ;
        console.log("Error on home.controller.js")
    }
}

module.exports = getHome ;