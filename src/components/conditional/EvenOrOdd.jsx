/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props =>{
    const isEven = props.number % 2 === 0;
    return(
        <div>
            number {props.number} is 
            {isEven ? <span> Even </span> : <span> Odd </span>}
        </div>
    )
}