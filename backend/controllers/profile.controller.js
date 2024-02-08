const mongoose = require('mongoose') ;
const USER = require('../models/user.models') ;
const STUDENT = require('../models/student.models.js') ;
const TEACHER = require('../models/teacher.models.js') ;

const getProfile=async (req,res)=>{
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
} ;

module.exports = getProfile ;