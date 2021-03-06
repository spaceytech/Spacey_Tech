const bcrypt = require("bcryptjs");
const passport = require("passport");
const SALT_INT = 10;
const mongoose = require("mongoose");
const User = mongoose.model("Users");
const { auth } = require("../middlewares/auth");
const { sendEmail } = require("../mail");

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

  // Register User

  app.post("/auth/register", (req, res) => {
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
      return res.send({ error: errors });
    }
    User.find({ email: req.body.email }, (err, email) => {
      if (email.length > 0) {
        return res.send({ error: { email: "Email already exists" } });
      }
      const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        name: `${req.body.first_name} ${req.body.last_name}`,
        postcode: req.body.postcode
      });
      registerUser(user, (err, user) => {
        res.send({ success: "Successfully registered" });
        sendEmail(user.email, user.first_name, null, "welcome");
        if (err) {
        }
      });
    });
  });

  app.post("/auth/tasker_success", (req, res) => {
    console.log(req.body);
    User.update(
      { _id: req.body.id },
      { $set: { tasker_registered: true } },
      (err, user) => {
        console.log(user);
        res.sendStatus(200);
      }
    );
  });

  // Edit user
  app.post("/auth/edit/:id", auth, (req, res) => {
    User.update({ _id: req.params.id }, { $set: req.body }, (err, user) => {
      if (err) {
        return res.json({ success: false, err });
      }
      User.find({ email: req.body.email }, (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.json({
          success: true,
          basic_info: {
            vehicle_type: user[0]._doc.vehicle_type,
            duration: user[0]._doc.duration,
            completedTasks: user[0]._doc.completedTasks,
            reviews: user[0]._doc.reviews,
            reliable: user[0]._doc.reliable,
            image: user[0]._doc.image,
            skills: user[0]._doc.skills,
            _id: user[0]._doc._id,
            first_name: user[0]._doc.first_name,
            last_name: user[0]._doc.last_name,
            email: user[0]._doc.email,
            name: user[0]._doc.name,
            postcode: user[0]._doc.postcode,
            comments: user[0]._doc.comments,
            tasker_registered: user[0]._doc.tasker_registered,
            isAuth: true
          },
          edit: true
        });
      });
    });
  });

  // Protecting Routes
  app.get("/auth/users", auth, (req, res) => {
    console.log(req.user._id);
    User.find({ _id: req.user._id }, (err, user) => {
      if (user) {
        if (user.length > 0) {
          return res.json({
            basic_info: {
              ...user[0]._doc,
              isAuth: true
            }
          });
        } else {
          console.log(user.length);
          return res.json({
            isAuth: false
          });
        }
      }
    });
  });

  app.get("/auth/deactivate/:id", (req, res) => {
    User.remove({ _id: req.params.id }, (err, user) => {
      res.status(200).json({ success: true });
    });
  });

  // Login User
  app.post("/auth/signin", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send(info);
      }
      req.login(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.send({ success: "Successfully loggedin" });
      });
    })(req, res, next);
  });

  // Logout User
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.json({ logout: true });
  });

  // Upload photo
  app.post("/auth/upload_photo", (req, res) => {
    console.log(req.body.image);
    User.update(
      { _id: req.body.id },
      { $set: { image: req.body.image } },
      (err, user) => {
        return res.sendStatus(200);
      }
    );
  });
};
