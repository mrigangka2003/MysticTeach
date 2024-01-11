const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn.js') ;

router.get("/dashboard", isLoggedIn, (req, res) => {
  const message = '<center> <h1>authenticated successfully whats next ?</h1></center>'
  res.send(message);
});

module.exports = router;
