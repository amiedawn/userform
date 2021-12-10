export const increment = () => {
  return {
    // type must match the switch case in the counterReducer file
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};