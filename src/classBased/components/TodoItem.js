import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
    state = {
        editing:false
    }
    handleEditing = (e)=>{
        this.setState({
            editing:true
        })
    }
    handleUpdatedDone = (e)=>{
        if(e.key === "Enter"){
            this.setState({
                editing:false
            });
        }
    }
    render() {
        let viewMode={};
        let editMode = {};
        if(this.state.editing){
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through"
        }
        const { completed, id, title } = this.props.todo;
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input type="checkbox" className={styles.checkbox} checked={completed}
                    onChange={()=> this.props.handleChangeProps(id)} />
                    <span style={completed ? completedStyle : null}>
                    {title}
                    </span>
                    <button onClick={()=>this.props.deleteTodoProps(id)}>Delete</button>
                </div>
                <input type="text" className={styles.textInput} 
                style={editMode}  
                onChange={(e)=>this.props.setUpdateProps(e.target.value, id)}
                value={title} onKeyDown={this.handleUpdatedDone}/>
                
            </li>
        )
    }
}

export default TodoItem