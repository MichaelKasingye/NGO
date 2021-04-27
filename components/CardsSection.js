import React from 'react'
import Cards from "./Cards";
import Title from "./Title";

import cards from "../styles/Cards.module.css";
function CardsSection() {
    return (
        <div className={cards.Cardbox}>
<Title title="What we do"/>

           <Cards/> 
           
        </div>
    )
}

export default CardsSection
