module.exports = app => {
  app.post("/api/task", (req, res) => {
    res.send(req.body);
  });
};
