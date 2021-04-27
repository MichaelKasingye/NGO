import React from 'react'
import us from "../styles/Us.module.css";
import Animate from "../styles/Animate.module.css";

function Us() {
    return (
        <div className={us.describe}>
            <img src="https://images.pexels.com/photos/1190208/pexels-photo-1190208.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"  alt=""/> 
            <span className={Animate.fadeIn}><p >We want to bring smiles to them through your support to improve sanitation and education for they a future</p></span> 
        </div>
    )
}

export default Us
