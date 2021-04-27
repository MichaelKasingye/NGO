import React from "react";
import cards from "../styles/Cards.module.css";
import Link from "next/link";
import Modal from "./Modal";

function ProductCards(props) {
  return (
    <div className={cards.heightAdjust}>
      <div className="card h-100" className={cards.productCard}>
        <img
          src={props.image}
          className={cards.image}
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title text-lorange" >
            {props.title}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
