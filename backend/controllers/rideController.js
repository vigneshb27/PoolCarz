const Ride = require("../models/rideModel");
const mongoose = require("mongoose");

// get all rides
const getAllRides = async (req, res) => {
  console.log("getAllRides");

  try {
    const rides = await Ride.find({},{_id:0,__v:0});
    console.log(rides);
    res.status(200).json( rides );
  } catch (err) {
    res.json({ message: err });
  }
};



// get a single workout
// const getWorkout = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid ID" });
//     }

//     const workout = await Workout.findById(id);
//     if (!workout) {
//       return res.status(404).json({ message: "Workout not found" });
//     } else {
//       res.status(200).json(workout);
//     }
//   } catch (err) {
//     res.json({ message: err });
//   }
// };

// // POST a new workout
// const createWorkout = async (req, res) => {
//   const { title, reps, load } = req.body;
//   let emptyFields = [];
//   if (!title) {
//     emptyFields.push("title");
//   }
//   if (!reps) {
//     emptyFields.push("reps");
//   }
//   if (!load) {
//     emptyFields.push("load");
//   }

//   if (emptyFields.length > 0) {
//     return res
//       .status(400)
//       .json({ message: "Please fill all the fields", emptyFields });
//   }

//   try {
//     const user_id = req.user._id;

//     const workout = await Workout.create({
//       title,
//       reps,
//       load,
//       user_id,
//     });
//     res.status(201).json(workout);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// post a new ride
const createRide = async (req, res) => {
  console.log("createRide");
  console.log(req.body);
  const { id, offerId, name, car, seatsLeft, pickUp, destination, username } =
    req.body;

  try {
    const ride = await Ride.create({
      id,
      offerId,
      name,
      car,
      seatsLeft,
      pickUp,
      destination,
      username,
    });
    res.status(201).json(ride);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// // delete a workout
// const deleteWorkout = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid ID" });
//     }

//     const workout = await Workout.findByIdAndDelete(id);
//     if (!workout) {
//       return res.status(404).json({ message: "Workout not found" });
//     } else {
//       res.status(200).json(workout);
//     }
//   } catch (err) {
//     res.json({ message: err });
//   }
// };

// // update a workout
// const updateWorkout = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid ID" });
//     }

//     const workout = await Workout.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (!workout) {
//       return res.status(404).json({ message: "Workout not found" });
//     } else {
//       res.status(200).json(workout);
//     }
//   } catch (err) {
//     res.json({ message: err });
//   }
// };

// book ride
const bookRide = async (req, res) => {
  console.log("bookRide");
  console.log(req.params);

  const { id } = req.params;

  const ride = await Ride.findOne({ id: id });

  if (!ride) {
    return res.status(404).json({ message: "Ride not found" });
  } else {
    ride.seatsLeft = ride.seatsLeft - 1;
    ride.save();
    res.status(200).json(ride);
  }
};

// cancel ride
const cancelRide = async (req, res) => {
  console.log("bookRide");
  console.log(req.params);

  const { id } = req.params;

  const ride = await Ride.findOne({ id: id });

  if (!ride) {
    return res.status(404).json({ message: "Ride not found" });
  } else {
    ride.seatsLeft = ride.seatsLeft + 1;
    ride.save();
    res.status(200).json(ride);
  }
};

module.exports = {
  getAllRides,
  createRide,
  bookRide,
  cancelRide,
  //   getAllWorkouts,
  //   getWorkout,
  //   deleteWorkout,
  //   updateWorkout,
};
