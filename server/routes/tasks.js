const mongoose = require("mongoose");
const Task = mongoose.model("Tasks");

module.exports = app => {
  app.post("/api/task", (req, res) => {
    res.send(req.body);
  });

  app.get("/api/get_tasks", (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) {
        return res.json({ success: false, err });
      }
      return res.json({
        success: true,
        tasks: tasks
      });
    });
  });
};
