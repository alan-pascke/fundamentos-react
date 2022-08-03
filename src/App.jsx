/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './App.css';
import First from './components/basics/First';
import ComParam from './components/basics/ComParam';
import Random from "./components/basics/Random";
import Card from "./components/layouts/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudendsList from "./components/loops/StudendsList";
import ProductsTab from "./components/loops/ProductsTab";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import UserInfo from "./components/conditional/UserInfo";
import Direct from "./components/communication/Direct";
import Undirect from "./components/communication/Undirect";

export default () =>{
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card title='#09 Undirectional Communication' color='#E3433A'>
                <p>Passando atributos do filho para o pai</p>
                <hr/>
                <Undirect></Undirect>
                </Card>
                <Card title='#08 Directional Communication' color='#4EA'>
                    <p>Pasando atributos do pai para o filho</p>
                    <hr/>
                    <Direct></Direct>
                </Card>
                <Card title='#07 - Even or Odd' color='#333'>
                    <EvenOrOdd number={20}></EvenOrOdd>
                    <UserInfo user={{name:'Fernando'}}></UserInfo>
                    <UserInfo></UserInfo>
                </Card>
                <Card title='#06 - Loop Challenge' color='#CAF'>
                    <ProductsTab></ProductsTab>
                </Card>
                <Card title='#05 - Loops' color='#BCA'>
                    <StudendsList></StudendsList>
                </Card>
                <Card title='#04 - Components with childrens' color='#EA1'>
                    <Family lastname='Ferreira'>
                        <FamilyMember name='Manuel' />
                        <FamilyMember name='Larissa' />
                        <FamilyMember name='Jamal' />
                    </Family>
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