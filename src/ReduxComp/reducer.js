import {
  CHANGE_FIELD_VALUE,
  ADD_CART,
  ADD_ITEM,
  ADD_ITEM_FILTER,
} from "./constants.js";

const reducer = (state = [], { type, name, payload }) => {
  switch (type) {
    case CHANGE_FIELD_VALUE: {
      return state + 1;
    }
    case ADD_CART:
      state[name] = payload;
      return { ...state };
    case ADD_ITEM:
      return { ...state, posts: payload };
    case ADD_ITEM_FILTER:
      return { ...state, posts: payload };
    default:
      return state;
  }
};
export default reducer;
