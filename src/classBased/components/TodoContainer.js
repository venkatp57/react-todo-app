import React from "react";
import TodoList from './TodoList';
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
    // state = {
    //     todos: [
    //         { id: 1, title: 'Test 1', completed: true },
    //         { id: 2, title: 'Test 2', completed: true },
    //         { id: 3, title: 'Test 3', completed: true },
    //         { id: 4, title: 'Test 4', completed: false },
    //     ]
    // }
    state = {
        todos: []
    }
    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(x => {
                if (x.id === id) {
                    return {
                        ...x,
                        completed: !x.completed
                    }
                }
                return x;
            })
        }));
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(x => { return x.id !== id; })
            ]
        });
    }

    addTodoItem = (title) => {
        const maxid = Math.max(...this.state.todos.map(x => x.id));
        this.setState({
            todos: [
                ...this.state.todos, { id: maxid + 1, title: title, completed: false }
            ]
        })
    }

    setUpdate = (updatedTitle, id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(x => {
                if (x.id === id) {
                    return {
                        ...x,
                        title: updatedTitle
                    }
                }
                return x;
            })
        }));
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res=>res.json()).then(data=> this.setState({todos:data}));
    }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodoList
                        todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
                        setUpdateProps = {this.setUpdate}>
                    </TodoList>
                </div>
            </div>
        )
    }
}

export default TodoContainer