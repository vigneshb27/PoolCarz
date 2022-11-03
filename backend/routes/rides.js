const express = require("express");
const router = express.Router();
const {
  getAllRides,
  createRide,
  bookRide,
  cancelRide,
} = require("../controllers/rideController");

// get all rides
router.get("/ridedetails", getAllRides);

// post a ride
router.post("/addride", createRide);

// book a ride
router.post("/bookride/:id", bookRide);

// cancel a ride
router.post("/cancelride/:id", cancelRide);

module.exports = router;
