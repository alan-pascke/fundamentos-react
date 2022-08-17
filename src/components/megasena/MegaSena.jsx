/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import './MegaSena.css'

export default (props) =>{

    const [qtt, setQtt] = useState(props.megaNumbers || 6)
    const initialNumbers = Array(qtt);
    const [nums, setNums] = useState(initialNumbers)


    function listNumbers (min, max, array) {
        var random = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(random) 
            ? listNumbers(min, max, array)
            : random;
    }

    function generateNumbers(quantity){
        const numbers = Array(quantity)
            .fill(0)
            .reduce((nums) => {
                const newNum = listNumbers(1, 60, nums);
                return [ ...nums, newNum]
            }, [])
            .sort((a, b) => a - b)
        
        return numbers;
    }
    
    return(
        <div className="Mega">
            <h2>Mega Sena</h2>
            <div className="nums">
                {nums.map(n => {
                    return (
                        <div className="styless">
                            <div key={''}>
                                {n} 
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <label>Amount: </label>
                <input
                    min = '1'
                    max = '15' 
                    type='number' 
                    value={qtt}
                    onChange={e => setQtt(+ e.target.value)}/>
            </div>
            <button 
                className="button"
                onClick={_ => {
                    setNums(generateNumbers(qtt));
                }}>
                GENERATE
            </button>


        </div>
    )
}
