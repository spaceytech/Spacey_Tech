const mongoose = require("mongoose");

const taskerSchema = mongoose.Schema(
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

const Tasker = mongoose.model("Tasker", taskerSchema);
module.exports = { Tasker };
