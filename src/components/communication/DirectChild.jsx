/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props =>{
    return (
        <div>
            <div>
                <span>{props.text} </span>
                <span>{props.number} </span>
                <span>{props.bool ? 'True' : 'False'}! </span>
            </div>
        </div>
    )
}