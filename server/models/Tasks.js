const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

const Task = mongoose.model("Tasks", taskSchema);
module.exports = { Task };
