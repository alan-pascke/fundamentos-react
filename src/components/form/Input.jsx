/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";

export default porps => {

    let [value, setValue] = useState('Initial')

    function whenChange(e){
        setValue(e.target.value)
    }

    return(
        <div>
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input type="text" value={value} onChange={whenChange}/>
                <input type="text" value={'read only'} readOnly />
                {/* <input type="text" value={undefined + ''} /> */}
            </div>
        </div>
    )
}
