const initialState = {
  count: 0
};

export const increment = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "INCREMENT":
      newState.count = newState.count + action.payload;
      return newState;

    case "DECREMENT":
      newState.count = newState.count - action.payload;
      return newState;

    default:
      return state;
  }
};
