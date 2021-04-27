import React from 'react'
import Coursel from "../styles/Coursel.module.css";
import Animate from "../styles/Animate.module.css";

function coursel(props) {
    return (
        <div className={Coursel.coursel}>
          <img src={props.image}  className={Coursel.image} alt=""/>
          {/* <img src="https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className={Coursel.image} alt=""/> */}

         <p className={Coursel.title} ><span className={Animate.fadeIn}>{props.title}</span></p>
        </div>
    )
}

export default coursel
