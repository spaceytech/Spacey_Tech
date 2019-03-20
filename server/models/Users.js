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
    tasker_registered: { type: Boolean },
    completedTasks: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    reliable: { type: Number, default: 0 },
    image: {
      type: String,
      default:
        "https://lh3.googleusercontent.com/QdaNqbsbjBcexfjw5u7t9gTgj5MI0UVLew5UBMH9thP7rtSfaceCQHckL0SxKSPbZ0FxT36vo9s7Ya-UTQ5PP-qyHAWSUxxWJyry6bVUNDE7VTVpLgvKqxDG5esU4899G-9L3xck658ErpymMX8WoO1HuAWmvEP9sX7eh5rcFJwL-JjkP0YulM2IIl0kzo4Eyt0mUKnkr2Ush_iNsmV6HtMJQMiHH2WkM9ViW98H89XfxmGOKUyhO3m47XNffT13WrRrGcvtLy4BF7EWfga11QY7PZPGgZy965sVWkoxdDb0N3CYsMJEdwlxSVrImajuSpRwmAT0ZGq6K5urzDmw7FMrfQyXgYlwjTobTkuU1TGdADDT-OJA5jgEGYsr8oOEa2g0wKst0OJ-abNl3uUX1Xqd4cbIAAxtXLGnOvI3218fuphUqfyGIBlaHnueJIISPZRy_1xIiLGIHf8n-sor5g-83Am9hyF8zBKX53m21xdl2NdZgciN_Bo7VVitH9rzOdTMK8z2SbGnBeIfWpZqtUu-Ie6JQuEX8VBvb27ETy-ev_7vB6I6HGXp4SZNIQzjgVvMCvM13Z-RKhy0vxeg5lC1HM-RtQUXtiepFbfRrqE4GgZ1jzcHzNGGIuMukzK8eaLPpDRydmtRhN1ZiFXVR0LlfF7wObI=s450-no"
    },
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
