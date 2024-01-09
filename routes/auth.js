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

passport.deserializeUser((id, done) => {
  USER.findById(id, (err, user) => {
    if (err) {
        return done(err);
    }
    done(null, user);
  });
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
      return res
        .status(400)
        .json({
          message: "Userhname is already exixts ! try something different",
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
      failureRedirect: "/signup",
      successRedirect: "/welcome",
      failureFlash: true, // Enable flash messages
    }),
    async (req, res) => {
      // This callback is empty in your code
    }
  );  

router.get("/dashboard", (req, res) => {
  res.send("thats meam you have successfully logged in and learnt passport.js");
});

module.exports = router;
