import React from 'react'
import Describe from "../styles/Describe.module.css";
import Animate from "../styles/Animate.module.css";
function describe() {
    return (
        <div className={Describe.describe}>
            <span className={Animate.fadeIn}><p >Many children in rural areas still leaving in poverty in Uganda with less basic needs </p></span> 
            <img src="https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt=""/> 
        </div>
    )
}

export default describe
