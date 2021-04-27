import React from 'react'
import courselSection from "../styles/CourselSection.module.css";
function CourselSection(props) {
    return (
        <div className={courselSection.courselsections}>
          <img src={props.image} className={courselSection.image} alt=""/>
          {/* <img src="https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className={Coursel.image} alt=""/> */}

         <div className={courselSection.title}> <p>{props.title}</p> </div>
        </div>
    )
}

export default CourselSection
