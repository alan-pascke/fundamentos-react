/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import students from "../../data/students";

export default () => {

    const styles = {
        listStyle: 'none',
    }

    const list = students.map(student =>{
        return (
            <li key={student.id}>
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