const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn.js') ;

router.get("/dashboard", isLoggedIn, (req, res) => {
 res.render('dashboard') ;
});

module.exports = router;
