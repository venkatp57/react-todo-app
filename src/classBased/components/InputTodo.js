import React, { Component } from "react";

class InputTodo extends Component {
    state = {
        title: ""
    }
    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title);
            this.setState({
                title:''
            });
        } else{
            alert('please enter item to add');
        }
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" className="input-text" placeholder="Add Todo..." value={this.state.title}
                    onChange={this.onChange} />
                <button className="btn">Add Item</button>
            </form>
        )
    }
}

export default InputTodo