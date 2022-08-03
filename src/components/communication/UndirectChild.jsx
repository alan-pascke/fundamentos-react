/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    
    const generateAge = () => parseInt(Math.random() * (20)) + 50
    

    return(
        <div>
            <div>Child</div>
            <button onClick={() => props.whenClick('John',generateAge(),true)}>
                OK
            </button>
        </div>
    )
}

