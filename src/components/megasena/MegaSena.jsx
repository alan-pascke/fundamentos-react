/* eslint-disable import/no-anonymous-default-export */
import React  from "react";
// import NumbersGenerate from "./NumbersGenerate";

export default (props) =>{

    const qtd = props.megaNumbers
    let list = []

    

    for (let i = 0; i < qtd; i++) {
        list[i] = parseInt(Math.floor(Math.random() * (qtd - 1) + 1 ));
    }

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        
    }
    
    list.sort( (a, b) =>  a - b)

    return(
        <div>
            {console.log(list)}
        </div>
    )
} 