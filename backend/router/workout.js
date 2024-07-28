const express = require("express");
const router = express.Router();
const {
  createWorkouts,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");

//get all workouts
router.get("/", getWorkouts);

//get single workouts
router.get("/:id", getWorkout);

//create a workouts
router.post("/", createWorkouts);

//delete a workouts
router.delete("/:id", deleteWorkout);

//update a workouts
router.patch("/:id", updateWorkout);

module.exports = router;
