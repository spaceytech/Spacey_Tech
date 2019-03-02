const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    book: { type: String, required: true },
    address: { type: String, required: true },
    duration: {
      type: Array,
      default: []
    },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = { Task };
