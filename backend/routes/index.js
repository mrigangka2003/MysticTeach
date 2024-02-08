const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn.js') ;
const USER = require('../models/user.models.js') ;

/*
@route
GET
*/

router.get("/dashboard", isLoggedIn, async(req, res) => {
    try {
       
        const username = req.user.username; 
        const user = await USER.findOne({ username: username });

        res.render('dashboard', { user: user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});




module.exports = router;
