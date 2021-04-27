import React from "react";
import Link from "next/link";
import Modal from "../components/Modal";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import cards from "../styles/Cards.module.css";
function Cards({ title, desc, icon }) {
  return (
    <div className={cards.Cardbox}>
    <div className={cards.card}>
      <div 
      className={cards.introCards}>
        <span  className={cards.Iconimage} alt="..." ><AiFillInstagram className={cards.icon}/></span>
        <div className={cards.body}>
          <h5 >
            Food
          </h5>
          <p >
            distributed to all villages in collaboration
          </p>

          </div>
       
      </div>
    </div>

    <div className={cards.card}>
      <div 
      className={cards.introCards}>
        <span  className={cards.Iconimage} alt="..." ><AiFillFacebook className={cards.icon}/></span>
        <div className={cards.body}>
          <h5 >
            Water
          </h5>
          <p>
          distributed to all villages in collaboration
          </p>

          </div>
       
      </div>
    </div>

    <div className={cards.card}>
      <div 
      className={cards.introCards}>
        <span  className={cards.Iconimage} alt="..." ><AiFillFacebook className={cards.icon}/></span>
        <div  className={cards.body}>
          <h5>
            Education
          </h5>
          <p>
          distributed to all villages in collaboration
          </p>

          </div>
       
      </div>
    </div>
    </div>
  );
}

export default Cards;
