const bcrypt = require("bcrypt");
const passport = require("passport");
const SALT_INT = 10;
const mongoose = require("mongoose");
const User = mongoose.model("Users");

module.exports = app => {
  // Register users
  const registerUser = (newUser, callback) => {
    bcrypt.genSalt(SALT_INT, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  };

  app.post("/auth/register", (req, res) => {
    console.log(req.body);
    req.checkBody("first_name", "First name is required").notEmpty();
    req.checkBody("last_name", "Last name is required").notEmpty();
    req.checkBody("email", "Email is required").notEmpty();
    if (req.body.email) {
      req.checkBody("email", "Email is not valid").isEmail();
    }
    req.checkBody("password", "Password is required").notEmpty();
    req
      .checkBody("password", "Password must contain a number")
      .matches("[0-9]");
    req.checkBody("postcode", "Postcode is required").notEmpty();
    req
      .checkBody("postcode", "Postcode must contain a number")
      .matches("[0-9]");
    req
      .checkBody("password", "Password must be at least 5 characters")
      .isLength({ min: 5 });

    let errors = req.validationErrors();
    if (errors) {
      console.log(errors);
      return res.send({ error: errors });
    }
    User.find({ email: req.body.email }, (err, email) => {
      console.log(email);
      if (email.length > 0) {
        return res.send({ error: { email: "Email already exists" } });
      }
      const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        name: `${req.body.first_name} ${req.body.last_name}`
      });
      registerUser(user, (err, user) => {
        console.log(user);
        res.send({ success: "Successfully registered", basic_info: user });
        if (err) {
          console.log(err);
        }
      });
    });
  });
};
