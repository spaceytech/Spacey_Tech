const taskers = require("../taskersList");
const { Tasker } = require("../models/Taskers");

module.exports = app => {
  // Get tasker information by id
  app.get("/api/get_tasker_by_id/:id", (req, res) => {
    Tasker.findById({ _id: req.params.id }, (err, tasker) => {
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
    console.log(req.query.task);
    Tasker.find({ skills: { $in: [req.query.task] } }, (err, taskers) => {
      console.log(taskers);
      if (err) {
        res.json({ success: false, err });
      }
      res.json({
        success: true,
        taskers
      });
    });
  });

  // Register as a tasker
  app.post("/api/register_as_tasker", (req, res) => {
    const details = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.description,
      perHour: req.body.perHour,
      skills: req.body.skills
    };

    Tasker.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        return res.json({ success: false, err });
      }
      if (user) {
        return res.json({
          success: false,
          err: "User already exists"
        });
      }
      const tasker = new Tasker(details);
      tasker.save((err, data) => {
        if (err) {
          return res.json({
            success: false,
            err
          });
        }

        res.status(200).json({
          success: true
        });
      });
    });
  });
};
