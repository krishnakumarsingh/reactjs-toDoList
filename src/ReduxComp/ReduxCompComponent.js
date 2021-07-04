/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsAdd } from "./action";
import Cart from "./Cart";
import "./index.scss";
import ReduxApiComp from "./ReduxApiComp";

const ReduxCompComponent = (props) => {
  const [count, setCount] = useState(0);
  const [cartCont, setCartCont] = useState([]);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(itemsAdd());
  }, [cartCont]);

  const updateHanled = () => {
    setCount(count + 1);
    props.changeFieldValue("count", count + 1);
  };
  const cartUpdateHanled = (name, list) => {
    const cartConts = [...cartCont];
    if (cartConts.some((elem) => elem[name].id === list.id))
      console.log("Already Added!!");
    else cartConts.push({ [name]: list });
    setCartCont(cartConts);
    props.changeFieldValue(name, list);
  };

  const removeCartUpdateHanled = (name, list) => {
    const cartConts = [...cartCont];
    const currentIndex = cartConts
      .map((elem, index) => {
        return elem[name].id;
      })
      .indexOf(list[name].id);
    cartConts.splice(currentIndex, 1);
    setCartCont(cartConts);
    props.changeFieldValue(name, list);
  };
  return (
    <div>
      <h1>Comp 1</h1>
      <div className="product-card-container">
        <div className="col-md-8">
          <div className="row">
            <ReduxApiComp
              cartUpdateHanled={cartUpdateHanled}
              cardsClass={props.cardsStyle}
              chunkCount={props.chunkCount}
              itemsAdd={posts}
              priceLabel={true}
            />
          </div>
        </div>
        <div className="col-md-4">
          <Cart
            cartUpdateHanled={removeCartUpdateHanled}
            data={cartCont}
            cardsClass={props.cardsStyle}
            chunkCount={props.chunkCount}
          />
        </div>
      </div>
      <div>{props.counter.count || count}</div>
      <button onClick={() => updateHanled()}>Click Here</button>
    </div>
  );
};

export default ReduxCompComponent;
