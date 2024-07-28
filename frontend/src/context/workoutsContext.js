import { createContext, useReducer } from "react";
import { workoutsReducer } from "../reducer/workoutsReducer";

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(workoutsReducer, { workout: null });
  const [state, dispatch] = useReducer(workoutsReducer);

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
