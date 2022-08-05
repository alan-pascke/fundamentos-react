/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    return(
        <div>
            <label htmlFor="">Pass: </label>
            <input 
                type="number" 
                id="passInput"  
                value={props.pass} 
                onChange={props.sPass}
            />
        </div>
    )
}