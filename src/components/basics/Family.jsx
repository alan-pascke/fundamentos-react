/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import MemberFamily from "./MemberFamily";


export default (props) =>{
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    }

    return (
        <div style={styles}>
            <MemberFamily name='Manuel' lastName='Silva'/>
            <MemberFamily name='Larissa' lastName='Ferrer'/>
            <MemberFamily name='Jamal' lastName='Jhonsu'/>
        </div>
    )
};