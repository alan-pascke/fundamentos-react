/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) =>{
    return (
        <span>
            {props.name} <strong> {props.lastName} </strong>
        </span>
    )
};