import React from "react";

function Cart({ data }) {
  console.log(data);
  const cartList = ["1", "2"].map((eachList, index) => (
    <li key={index + eachList}>eachList</li>
  ));
  return <ul>{cartList}</ul>;
}

export default Cart;
