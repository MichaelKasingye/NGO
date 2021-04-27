import React from 'react'
import Describe from "./Describe";
import Us from "./Us";
import Title from "./Title";

import us from "../styles/Us.module.css";

function MidSection() {
    return (
        <div className={us.MidSection}>
            <Title title="Challenge"/>
            <Describe/>
            <Title title="What we want"/>

            <Us/>
        </div>
    )
}

export default MidSection
