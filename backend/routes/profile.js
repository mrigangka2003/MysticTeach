const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn.js') ;
const USER = require('../models/user.models.js') ;
const STUDENT = require('../models/student.models.js') ;
const getProfile = require('../controllers/profile.controller.js')


router.get('/profile/:username', isLoggedIn,getProfile) ;

router.post('/profile/:username',async (req,res)=>{
    
})
module.exports = router  ;