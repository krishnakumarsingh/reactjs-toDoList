export function changeFieldValue(name, value) {
  console.log(name, value);
  return {
    type: "CHANGE_FIELD_VALUE",
    name,
    value,
  };
}

export function cartAdd(name, value) {
  console.log(name, value);
  return {
    type: "ADD_CART",
    name,
    value,
  };
}
