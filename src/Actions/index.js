export const inc = value => {
  return {
    type: "INCREMENT",
    payload: value
  };
};

export const dec = value => {
  return {
    type: "DECREMENT",
    payload: value
  };
};
