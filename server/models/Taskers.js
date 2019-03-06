const mongoose = require("mongoose");

const taskerSchema = mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    duration: {
      type: Array,
      default: []
    },
    description: { type: String, required: true },
    perHour: { type: Number, required: true },
    completedTasks: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    reliable: { type: Number, default: 0 },
    reviews: [
      {
        body: String,
        author: String,
        date: String,
        img: {
          type: String,
          default: "../images/user.png"
        }
      }
    ],
    skills: { type: Array }
  },
  { timestamps: true }
);

const Tasker = mongoose.model("Tasker", taskerSchema);
module.exports = { Tasker };
