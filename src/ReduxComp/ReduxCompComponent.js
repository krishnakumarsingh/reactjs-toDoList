import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsAdd } from "./action";
import Cart from "./Cart";
import "./index.css";
// import CurrencyComa from "../components/CurrencyComa";
import ReduxApiComp from "./ReduxApiComp";
// import Cards from "./Cards";

const ReduxCompComponent = (props) => {
  const [count, setCount] = useState(0);
  const [cartCont, setCartCont] = useState([]);
  const [cardsStyle, setCardsStyle] = useState("cards-style");
  const [chunkCount, setChunkCount] = useState(9);
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
  const navBar = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            {/* <li className="breadcrumb-item">
              <a href="#">Library</a>
            </li> */}
            <li className="breadcrumb-item active" aria-current="page">
              Redux Component
            </li>
          </ol>
        </nav>
        <span className="navbar-text">
          <i
            className={`fas fa fa-th-large ft-2 mr-2 ${
              cardsStyle === "cards-container" ? "" : "active"
            }`}
            onClick={() => {
              setCardsStyle("cards-style");
              setChunkCount(9);
            }}
          ></i>
          <i
            className={`fas fa fa-bars ft-2 ${
              cardsStyle === "cards-style" ? "" : "active"
            }`}
            onClick={() => {
              setCardsStyle("cards-container");
              setChunkCount(10);
            }}
          ></i>
        </span>
      </div>
    </nav>
  );
  return (
    <div>
      {navBar}
      <div className="product-card-container">
        <div className="col-md-8">
          <div className="row">
            <ReduxApiComp
              cartUpdateHanled={cartUpdateHanled}
              cardsClass={cardsStyle}
              chunkCount={chunkCount}
              itemsAdd={posts}
            />
          </div>
        </div>
        <div className="col-md-4">
          <Cart
            cartUpdateHanled={removeCartUpdateHanled}
            data={cartCont}
            cardsClass={cardsStyle}
            chunkCount={chunkCount}
          />
        </div>
      </div>
      <div>{props.counter.count || count}</div>
      <button onClick={() => updateHanled()}>Click Here</button>
    </div>
  );
};

export default ReduxCompComponent;
