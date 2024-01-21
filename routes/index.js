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

router.get('/profile/:username', isLoggedIn,async (req, res) => {
    const username = req.params.username;

    try {
        const user = await USER.findOne({ username: username });

        if (!user) {
            return res.status(404).send('User not found');
        }

        if (user.usertype === 'teacher') {
            return res.render('profileTeacher', { user: user });
        } else if (user.usertype === 'student') {
            return res.render('profileStudent', { user: user });
        } else {
            return res.status(500).send('Invalid userType');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});



module.exports = router;
