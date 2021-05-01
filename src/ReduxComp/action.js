import { CHANGE_FIELD_VALUE, ADD_CART, ADD_ITEM } from "./constants.js";
export function changeFieldValue(name, value) {
  return {
    type: CHANGE_FIELD_VALUE,
    name,
    value,
  };
}

export function cartAdd(name, value) {
  return {
    type: ADD_CART,
    name,
    value,
  };
}

export const itemsAdd = () => async (dispatch) => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((res) => res.json());
  dispatch({
    type: ADD_ITEM,
    payload: result,
  });
};
