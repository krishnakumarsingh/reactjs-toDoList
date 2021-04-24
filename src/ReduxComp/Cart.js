import React from "react";
import Cards from "./Cards";
import CurrencyComa from "../components/CurrencyComa";

function Cart({ data, cartUpdateHanled }) {
  const cartList = data.map((eachList, index) => {
    const { albumId, id, thumbnailUrl, title } = eachList.cart;
    return (
      <div key={index + eachList}>
        <Cards
          key={title + index}
          cartUpdateHanled={cartUpdateHanled}
          eachList={eachList}
          albumId={albumId}
          id={id}
          url={thumbnailUrl}
          title={title}
        />
      </div>
    );
  });
  return (
    <>
      <div className="justify-content-end" style={{ margin: "30px 15px" }}>
        Total: {CurrencyComa(data.length * 199, "₹")}
      </div>
      <div className="carts-list cards-container">{cartList}</div>
    </>
  );
}

export default Cart;
