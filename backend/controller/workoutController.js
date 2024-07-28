const Workout = require("../model/workoutModel");
const mongoose = require("mongoose");
//get all workouts
const getWorkouts = async (req, res) => {
  try {
    console.log("get all workouts");
    const workout = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get single workoutsg
const getWorkout = async (req, res) => {
  try {
    console.log("get all workouts");
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No Such Workouts" });
    }

    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "No Such Workouts" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create single workoutsg
const createWorkouts = async (req, res) => {
  try {
    const emptyFields = [];
    console.log("create a workout req: ", req.body);
    const { title, reps, load } = req.body;

    if (!title) {
      emptyFields.push("title");
    }
    if (!reps) {
      emptyFields.push("reps");
    }
    if (!load) {
      emptyFields.push("load");
    }
    if (emptyFields.length > 0) {
      return res
        .status(400)
        .json({ error: "Please Fill all the fields", emptyFields });
    }

    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    console.log("delete workouts");
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No Such Workouts" });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
      return res.status(400).json({ error: "No Such Workouts" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  try {
    console.log("update workouts");
    const { id } = req.params;
    // const { title, reps, load } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No Such Workouts" });
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!workout) {
      return res.status(400).json({ error: "No Such Workouts" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  createWorkouts,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
