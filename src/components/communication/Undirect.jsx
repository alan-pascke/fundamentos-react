/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import UndirectChild from "./UndirectChild";

export default props => {

    const [name, setName] = useState('?');
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false) 

    function information(name, age, nerd){
        setName(name)
        setAge(age)
        setNerd(nerd)
    }



    return (
        <div>
            <div>
                <span>{name} </span>
                <span> {age} </span>
                <span> {nerd ? 'true' : 'False'}</span>
            </div>
            <UndirectChild whenClick={information}/>
        </div>
    )
}