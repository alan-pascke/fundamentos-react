/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DirectChild from "./DirectChild";

export default props =>{
    return (
        <div>
            <DirectChild text='Child 1 ' number={14} bool={true}></DirectChild>
        </div>
    )
}