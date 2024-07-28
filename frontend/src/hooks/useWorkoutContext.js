import { useContext } from "react";
import { WorkoutsContext } from "../context/workoutsContext";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside an WorkoutsContextProvider"
    );
  }
  return context;
};
