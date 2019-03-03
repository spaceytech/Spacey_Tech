const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Models
require("./models/Tasks");

// Routes
require("./routes/tasks")(app);
// require("./routes/users")(app);
require("./routes/tasker")(app);

// Server run
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running from ${PORT}`);
});
