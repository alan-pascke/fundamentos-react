/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import students from "../../data/students";

export default props => {

    const styles = {
        listStyle: 'none',
    }

    const list = students.map(student =>{
        return (
            <li>
                {student.id} - {student.name} - nota: {student.nota}
            </li>
        )
    })

    return(
        <div>
            <ul style={styles}>
                {list}
            </ul>
        </div>
    )
}