module.exports = app => {
  app.post("/api/tasks", (req, res) => {
    console.log(req.body);
  });
};
