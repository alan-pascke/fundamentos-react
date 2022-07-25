/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (min, max) =>{
    return (
        <div>
            <p>{Math.random() * (min - max) + min}</p>
            
        </div>
    )
}