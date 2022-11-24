import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    console.log("todolist", props.todos);
    return (
        <ul>
            {props.todos.map(x => (
                <TodoItem key={x.id} todo={x}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdateProps={props.setUpdateProps} />
            ))}
        </ul>
    )
}

export default TodoList