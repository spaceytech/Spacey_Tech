const mongoose = require("mongoose");
const User = mongoose.model("Users");

module.exports = app => {
  // Get tasker information by id
  app.get("/api/get_tasker_by_id/:id", (req, res) => {
    User.findById({ _id: req.params.id }, (err, tasker) => {
      if (err) {
        res.json({
          success: false,
          err
        });
      }
      res.status(200).json({
        success: true,
        tasker
      });
    });
  });

  // Search taskers that match task
  app.get("/api/search_tasker", (req, res) => {
    console.log(req.query.task.toLowerCase());
    User.find(
      {
        skills: {
          $elemMatch: { task: req.query.task.toLowerCase() }
        }
      },
      (err, taskers) => {
        console.log(taskers);
        if (err) {
          res.json({ success: false, err });
        }
        res.json({
          success: true,
          taskers
        });
      }
    );
  });

  // Register as a tasker
  app.post("/api/save_tasker_details", (req, res) => {
    const skills = req.body.skills;
    let newSkills = [];
    for (let skill in skills) {
      const task = {
        task: skill
      };
      for (let prop in skills[skill]) {
        task[prop] = skills[skill][prop];
      }
      newSkills.push(task);
    }
    User.update(
      { _id: req.body.id },
      {
        $set: {
          address: req.body.address,
          skills: newSkills,
          vehicle_type: req.body.vehicle_type,
          promotion: req.body.promotion,
          birthdate: req.body.birthdate
        }
      },
      (err, user) => {
        console.log(user);
      }
    );
  });
};
