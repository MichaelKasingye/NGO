import React, { useEffect, useState } from "react";
import { client } from "../contenfulClient/client";
import {combos} from "../library/combos"
import Modal from "./Modal";
import ModalCard from "./ModalCard";
import StoryCard from "./StoryCard";
import Title from "./Title";

import modaler from "../styles/Modal.module.css";
import cards from "../styles/Cards.module.css";
import products from "../styles/Product.module.css";

function Cards({ title, desc, img }) {
  const [items, setItems] = useState();
  const [secondaryItems, setSecondaryItems] = useState();

  // useEffect(() => {
  //   client
  //     .getEntries()
  //     .then(
  //       (response) => 
  //       setItems(response.items)
  //       // console.log(response.items)
  //     )
  //     .catch((err) => console.log(err));
  // }, []);
 
  return (
    <div className={products.box}>
      <div className={products.heading}>
      <Title title="Our Stories"/>
      <p>More stories</p>

      </div>
      {/* {typeof items != "undefined"
        ? items
            .filter((filrterdData) => filrterdData.fields.headSets === true)
            // .slice(0, 5)
            .map((product, index) => (
              <div className={products.Cardbox}>
                <ProductCard
                  key={Math.random()}
                  image={product.fields.featuredImage.fields.file.url}
                  title={product.fields.name}
                  price={product.fields.price}
                  productImages="img"
                  desc="dsdssdssddsd"
                />
              </div>
            ))
        : ""} */}
        {/* {
          combos
          .map((product, index) => (
            <div className={products.Cardbox}>
              <StoryCard
                key={Math.random()}
                image="https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                title="A child shows his appreciation in his own way"
                
              />
            </div>
          ))
        } */}
        <div className={products.Cardbox}>
         <StoryCard
                key={Math.random()}
                image="https://images.pexels.com/photos/2927675/pexels-photo-2927675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="A child shows his appreciation in his own way"
                
              />
               <StoryCard
                key={Math.random()}
                image="https://images.pexels.com/photos/1102570/pexels-photo-1102570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="A child shows his appreciation in his own way"
                
              />
               <StoryCard
                key={Math.random()}
                image="https://images.pexels.com/photos/3277188/pexels-photo-3277188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="A child shows his appreciation in his own way"
                
              />
              </div>
    </div>
  );
}

export default Cards;
