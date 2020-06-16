const initialState = {
    show: false
  };
  
  export const dashboard = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
      case "DASHBOARD":
        newState.show = action.payload;
        return newState;
      default:
        return state;
    }
  };
  