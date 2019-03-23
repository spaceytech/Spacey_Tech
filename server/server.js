const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const expressValidator = require("express-validator");
const MongoStore = require("connect-mongo")(session);

require("dotenv").config();

// MongoDB
mongoose.connect(process.env.MONGO_URI).then(connection => {
  console.log("Successfully connected to database");
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Express Messages
app.use(
  session({
    secret: "abcdefg",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Express Messages
app.use(require("connect-flash")());
app.use((req, res, next) => {
  res.locals.messages = require("express-messages")(req, res);
  res.locals.user = req.user || null;
  next();
});

app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      const namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }

      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Models
require("./models/Tasks");
require("./models/Users");

require("./services/passport");

// Routes
require("./routes/tasks")(app);
require("./routes/users")(app);
require("./routes/tasker")(app);

process.env.PWD = process.cwd();

// Conditional Production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("clientside/build"));
  const path = require("path");
  app.get("/", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/account/*", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/become_tasker/*", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/dashboard/*", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/handyman", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/laundry", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/delivery", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/cleaning", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/installation", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/cleaning", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/signin", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/signup", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
  app.get("/about", (req, res) => {
    res.sendFile(
      path.resolve(process.env.PWD, "clientside", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running from ${PORT}`);
});
