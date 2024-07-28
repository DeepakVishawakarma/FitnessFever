require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./router/workout");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  // console.log("middleware req: ", req.path);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen to request
    app.listen(process.env.PORT, () => {
      console.log(`server running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
