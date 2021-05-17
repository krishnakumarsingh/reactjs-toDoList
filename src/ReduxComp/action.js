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

export const itemsAdd = () => (dispatch) => {
  new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ADD_ITEM,
          payload: data,
        });
      });
  });
};
