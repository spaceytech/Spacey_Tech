module.exports = app => {
  app.get("/api/tasker", (req, res) => {
    res.send(req.params);
  });
  app.get("/api/searchTasker", (req, res) => {
    const taskers = [
      {
        id: 303020,
        name: "David Ricardo",
        perHour: 60.23,
        completedTasks: 50,
        reviews: 90,
        reliable: 80,
        description:
          "Painting and decorating homes and offices, ranging from small tasks such as putting up shelves and pictures to full office or home renovations. For large jobs cheaper rates can be expected for the assistants depending on work and numbers of hours",
        review: {
          text: `David arrived on time with all the right tools. He got on with the job and everything was completed within one hour to a high standard. He asked me to check eveything was ok when he finished the task. I would definitely use him again. `,
          user: "Kevin Marci",
          time: "31 January 2019"
        }
      },
      {
        id: 303032,
        name: "Rachel Maddow",
        perHour: 20.23,
        completedTasks: 10,
        reviews: 60,
        reliable: 100,
        description:
          "Full office or home renovations. For large jobs cheaper rates can be expected for the assistants depending on work and numbers of hours",
        review: {
          text: `Rachel arrived on time with all the right tools. He got on with the job and everything was completed within one hour to a high standard. He asked me to check eveything was ok when he finished the task. I would definitely use him again. `,
          user: "Angela Marci",
          time: "20 January 2019"
        }
      }
    ];
    res.send(taskers);
  });
};
