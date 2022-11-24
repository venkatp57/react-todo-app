import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa"
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false);

    const handleEditing = (e) => {
        setEditing(true);
    }
    const handleUpdatedDone = (e) => {
        if (e.key === "Enter") {
            setEditing(false);
        }
    }

    useEffect(()=>{
        return ()=>{
            console.log("Cleaning up...!");
        }
    },[])

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through"
    }

    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }
    
    const { completed, id, title } = props.todo;
    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input type="checkbox" className={styles.checkbox} 
                checked={completed}
                    onChange={() => props.handleChangeProps(id)} />
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                <button onClick={() => props.deleteTodoProps(id)}>
                    <FaTrash style={{color:"orangered", fontSize:"16px"}} /></button>
            </div>
            <input type="text" className={styles.textInput}
                style={editMode}
                onChange={(e) => props.setUpdateProps(e.target.value, id)}
                value={title} onKeyDown={handleUpdatedDone} />

        </li>
    )

}

export default TodoItem