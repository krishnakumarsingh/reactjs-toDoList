const reducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case "CHANGED_VALUE": {
      return state + 1;
    }
    case "ADD_CART":
      state[action.name] = action.value;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
