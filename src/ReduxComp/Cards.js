import React from "react";
import CurrencyComa from "../components/CurrencyComa";

function Cards({
  cartUpdateHanled,
  eachList,
  albumId,
  id,
  url,
  title,
  priceNet = CurrencyComa(199, "₹"),
}) {
  let titleNew = title ? title.replace(/\s/g, "-") : "";
  return (
    <li
      className="cards__item"
      onClick={() => cartUpdateHanled("cart", eachList)}
      album-id={albumId}
      id={id}
      title={titleNew}
    >
      <div className="card">
        <div data-bg={url}>
          <img src={url} alt={title} />
        </div>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__text"></p>
          <p className="card-text" style={{ textAlign: "right" }}>
            <small className="text-muted">{priceNet}</small>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Cards;
