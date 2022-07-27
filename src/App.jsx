/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Primeiro from './components/basics/First';
import ComParam from './components/basics/ComParam';
import Random from "./components/basics/Random";
import Card from "./components/layouts/Card";
import './App.css'

export default () =>{
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card title='Random Numbers' color='#082'>
                    <Random min={0} max={50}/>
                </Card>
                <Card title='Component with param' color='#F52'>
                    <ComParam 
                        title='Second Component' 
                        aluno=' João ' 
                        nota=' 9.5 '
                    />
                </Card>
                <Card title='First Component' color='#A80'>
                    <Primeiro></Primeiro>    
                </Card>
            </div>
        </div>
    );
}