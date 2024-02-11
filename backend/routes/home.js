const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn.js') ;
const USER = require('../models/user.models.js') ;
const getHome = require("../controllers/home.controller.js");

/*
    home page 
    @route
*/

router.get('/home',isLoggedIn,getHome) ;



module.exports = router ;