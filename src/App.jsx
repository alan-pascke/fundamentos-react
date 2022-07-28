/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import First from './components/basics/First';
import ComParam from './components/basics/ComParam';
import Random from "./components/basics/Random";
import Card from "./components/layouts/Card";
// import Family from "./components/basics/Family";
// import FamilyMember from "./components/basics/FamilyMember";
import './App.css';


export default () =>{
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card></Card>
                <Card title='#04 - Components whith childrens' color='#EA1'>
                    {/* <Family lastname='Ferreira'>
                        <FamilyMember name='Manuel' />
                        <FamilyMember name='Larissa' />
                        <FamilyMember name='Jamal' />
                    </Family> */}

                </Card>
                <Card title='#03 Random Numbers' color='#082'>
                    <Random min={0} max={50}/>
                </Card>
                <Card title='#02 - Component with param' color='#F52'>
                    <ComParam 
                        title='Second Component' 
                        aluno=' João ' 
                        nota=' 9.5 '
                    />
                </Card>
                <Card title='#01- First Component' color='#A15'>
                    <First></First>   
                </Card>
            </div>
        </div>
    );
}