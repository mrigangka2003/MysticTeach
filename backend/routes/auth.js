const express = require("express");
const router = express.Router();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const USER = require("../models/user.models");

passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      const user = await USER.findOne({ username });
      if (!user) {
        return done(null, false, { message: "IncorrectUsername" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return done(null, false, { message: "password didn't match" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await USER.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

/*
 @route
 signup routes
*/

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, username, city, usertype, password } = req.body;
    const exixtingUser = await USER.findOne({ username });

    if (exixtingUser) {
      return res.status(400).json({
        message: "Username is already exixts ! try something different",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new USER({
      name,
      email,
      username,
      city,
      usertype,
      password: hashedPassword,
    });

    await newUser.save();
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
});

router.get("/login", (req, res) => {
  const locals = {
    title: "login",
  };
  res.render("login", locals);
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);


//log out functionality 
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});


module.exports = router;
