const initialState = {
  workout: null,
};

export const workoutsReducer = (state = initialState, action) => {
  console.log("workoutsReducer ~ action:", action);
  const { type, payload } = action;
  switch (type) {
    case "SET_WORKOUTS":
      return {
        workout: payload,
      };
    case "CREATE_WORKOUTS":
      return {
        workout: [payload, ...state.workout],
      };
    case "DELETE_WORKOUTS":
      return {
        workout: state.workout.filter((w) => w._id !== payload._id),
      };
    default:
      return state;
  }
};
