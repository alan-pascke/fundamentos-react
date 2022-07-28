/* eslint-disable import/no-anonymous-default-export */
import React, {cloneElement} from "react";


export default props =>{
    const styles = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <div style={styles}>
            {
                props.children.map((child, i) => {
                    console.log(child)
                    return cloneElement (child, { ...props, key: i});
                    
                })
            }
        </div>
    )
};