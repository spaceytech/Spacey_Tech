const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: 1,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    phone: { type: Number },
    postcode: { type: String },
    address: mongoose.Schema.Types.Mixed,
    birthdate: mongoose.Schema.Types.Mixed,
    vehicle_type: { type: Array },
    promotion: { type: String },
    duration: {
      type: Array,
      default: []
    },
    completedTasks: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    reliable: { type: Number, default: 0 },
    image: { type: String, default: "../images/user.png" },
    comments: [
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

mongoose.model("Users", userSchema);
