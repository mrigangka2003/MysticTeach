const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn.js') ;
const USER = require('../models/user.models.js') ;

/*
    home page 
    @route
*/

router.get('/home',isLoggedIn,async(req,res)=>{
    try {
        const currentUser = await USER.findById(req.user._id) ;
        if(!currentUser){
            return res.status(404).json({error:"User not found"}) ;
        }
        const user = currentUser.username ;
        const date = new Date().toString() ;
        res.render('home',{date : date,
        user:user}) ;
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
    
})




module.exports = router ;