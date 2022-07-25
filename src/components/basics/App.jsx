/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Primeiro from './First'
import ComParam from './ComParam'
import Random from "./Random";

export default props =>{
    return (
        <div id='app'>
            <h1>Fundamentos React (Arrow)</h1>
            <h3>Random number</h3>
            <Random min='1' max='10'/>
            <ComParam 
                title='Second Component' 
                aluno=' João ' 
                nota=' 9.5 '
            />
            <Primeiro></Primeiro>
        </div>
    );
}