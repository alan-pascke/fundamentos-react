/* eslint-disable import/no-anonymous-default-export */
import React, {cloneElement} from "react";


export default props =>{
    const styles = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <div style={styles}>
            {cloneElement(props.children, { ...props})}
        </div>
    )
};