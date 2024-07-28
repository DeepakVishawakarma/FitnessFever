import { useWorkoutContext } from "../hooks/useWorkoutContext";
const { formatDistanceToNow } = require("date-fns");

const WorkoutsDetails = ({ params }) => {
  const { dispatch } = useWorkoutContext();
  const { title, load, reps, createdAt, _id } = params;

  const handleDeleteClick = async () => {
    const resp = await fetch("/api/workouts/" + _id, {
      method: "DELETE",
    });
    const response = await resp.json();
    console.log("handleDeleteClick response: ", response);
    if (resp.ok) {
      dispatch({ type: "DELETE_WORKOUTS", payload: response });
      console.log("workout deleted");
    }
  };

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>
        <strong>Load (Kg): </strong>
        {load}
      </p>
      <p>
        <strong>Reps: </strong>
        {reps}
      </p>
      <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleDeleteClick}>
        Delete
      </span>
    </div>
  );
};

export default WorkoutsDetails;
