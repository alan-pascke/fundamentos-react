/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Card.css"

export default (props) =>{

 const cardStyle = {
        backgroundColor:props.color || '#222',
        borderColor: props.color || '#222',
    }

    return (
        <div className='Card' style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content">
                {props.children}
            </div>

        </div>
    )
}