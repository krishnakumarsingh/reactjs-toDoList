import {
  CHANGE_FIELD_VALUE,
  ADD_CART,
  ADD_ITEM,
  ADD_ITEM_FILTER,
} from "./constants.js";
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
  if (localStorage.getItem("photos")) {
    dispatch({
      type: ADD_ITEM_FILTER,
      payload: JSON.parse(localStorage.getItem("photos")),
    });
    return false;
  }
  new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ADD_ITEM,
          payload: data,
        });
        localStorage.setItem("photos", JSON.stringify(data));
        resolve(data);
      });
  });
};

export const filterValue = () => (dispatch) => {
  if (localStorage.getItem("todos")) {
    dispatch({
      type: ADD_ITEM_FILTER,
      payload: JSON.parse(localStorage.getItem("todos")),
    });
    return false;
  }
  new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ADD_ITEM_FILTER,
          payload: data,
        });
        localStorage.setItem("todos", JSON.stringify(data));
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
