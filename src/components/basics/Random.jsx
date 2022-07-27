/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    const randomNum = parseInt(Math.random() * (props.max - props.min) + props.min)
    return (
        <div>
            <h3>Random number</h3>
            <p>{randomNum}</p>
            
        </div>
    )
}