import React, { useEffect } from "react";
import WorkoutsDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

export default function Home() {
  const { workout, dispatch } = useWorkoutContext();
  console.log("~ Home ~ sate:", workout);
  // const [workoutList, setWorkoutList] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const resp = await fetch("/api/workouts/");
      const response = await resp.json();
      if (resp.ok) {
        console.log("response:", response);
        // setWorkoutList(response);
        dispatch({ type: "SET_WORKOUTS", payload: response });
      }
    };
    fetchWorkout();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workout &&
          workout.map((item) => {
            return <WorkoutsDetails id={item._id} params={item} />;
          })}
      </div>
      <WorkoutForm />
    </div>
  );
}
