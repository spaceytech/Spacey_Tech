const taskers = require("../taskersList");

module.exports = app => {
  app.get("/api/tasker", (req, res) => {
    res.send(req.params);
  });
  app.get("/api/searchTasker", (req, res) => {
    // console.log(req.query.task);
    // console.log(taskers[0].task);
    // console.log(taskers[0].task.indexOf(req.query.task));

    const match = taskers.filter(tasker => {
      return tasker.task.indexOf(req.query.task) !== -1;
    });

    res.send(match);
  });
};
