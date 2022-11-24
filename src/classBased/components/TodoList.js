import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    render(){
        return(
            <ul>
                {this.props.todos.map(x=>(
                    <TodoItem key={x.id} todo={x} 
                    handleChangeProps={this.props.handleChangeProps}
                    deleteTodoProps = {this.props.deleteTodoProps}
                    setUpdateProps = {this.props.setUpdateProps}/>
                ))}
            </ul>
        )
    }
    
}

export default TodoList