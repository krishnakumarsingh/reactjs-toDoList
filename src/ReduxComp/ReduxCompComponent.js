import React, { useState } from "react";
import Cart from "./Cart";

const imgPath = "./assets/img/";
const lists = [
  {
    id: "list-1",
    img: "iphone-x.jpeg",
    productTitle: "Card title 1",
    productDetails: `This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`,
    updatedHeading: "Last updated 3 mins ago",
  },
  {
    id: "list-2",
    img: "iphone-x.jpeg",
    productTitle: "Card title 2",
    productDetails: `This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`,
    updatedHeading: "Last updated 3 mins ago",
  },
  {
    id: "list-3",
    img: "iphone-x.jpeg",
    productTitle: "Card title 3",
    productDetails: `This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`,
    updatedHeading: "Last updated 3 mins ago",
  },
  {
    id: "list-4",
    img: "iphone-x.jpeg",
    productTitle: "Card title 3",
    productDetails: `This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`,
    updatedHeading: "Last updated 3 mins ago",
  },
];
const ReduxCompComponent = (props) => {
  console.log(props);
  const [count, setCount] = useState(0);
  const updateHanled = () => {
    setCount(count + 1);
    props.changeFieldValue("count", count + 1);
  };
  const cartUpdateHanled = (x, y) => {
    setCount(count + 1);
    props.changeFieldValue(x, y);
  };
  const cardContainer = lists.map((eachList, index) => (
    <div
      className="card mb-3 product-card"
      key={index + eachList}
      onClick={() => cartUpdateHanled("addCart", eachList.id)}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`${imgPath}${eachList.img}`}
            className="card-img"
            alt="iphone-x"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{eachList.productTitle}</h5>
            <p className="card-text">{eachList.productDetails}</p>
            <p className="card-text">
              <small className="text-muted">{eachList.updatedHeading}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="product-card-container">{cardContainer}</div>
      <div>{props.counter.count || count}</div>
      {console.log(props.counter)}
      <button onClick={() => updateHanled()}>Click Here</button>
      <Cart data={props.counter.count || count} />
    </div>
  );
};

export default ReduxCompComponent;
