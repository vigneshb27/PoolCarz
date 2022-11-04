const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rideSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
      unique: true,
    },
    offerId: {
      type: String
    },
    name: {
      type: String,
      required: true,
    },
    car: {
      type: String,
      required: true,
    },
    seatsLeft: {
      type: Number,
      required: true,
    },
    pickUp: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// creates a new collection called "rides" in the database
module.exports = mongoose.model("Ride", rideSchema);
