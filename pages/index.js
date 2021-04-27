import Meta from "../components/Meta";
import Header from "../components/Header";
import Title from "../components/Title";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import { introCards } from "../library/introCards";
import Coursel from "../components/Coursel";
import CourselSection from "../components/CourselSection";

import MidSection from "../components/MidSection";
import CardSection from "../components/CardsSection";
import Us from "../components/Us";
import Stories from "../components/Stories";
import 'animate.css/animate.css'

import home from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={home.container} id="home">
      {/* <Meta title="Ministry" /> */}
<Coursel 
image="https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
title="Every Child is a Future"
/>

<MidSection/>

<CourselSection image="https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
title="Education to the child"/>

<CardSection/>

<Stories/>
<CourselSection image="https://images.pexels.com/photos/1125849/pexels-photo-1125849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
title="Sanitation to the child"/>
    </div>
  );
}
