import React, { useState, useEffect } from "react";
import Header from "../../classBased/components/Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import "../../functionBased/App.css";


const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos());

    const handleChange = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(x => { return x.id !== id; })
        ]);
    }

    const addTodoItem = (title) => {
        const ids = todos.map(x => x.id);
        const maxid = Math.max(...ids);
        setTodos([
            ...todos, { userId: 1, id: maxid + 1, title: title, completed: false }
        ])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(x => {
                if (x.id === id) {
                    x.title = updatedTitle
                }
                return x;
            })
        );
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //         .then(res => res.json())
    //         .then(data => setTodos(data));
    // }, [setTodos])

    useEffect(() => {
        console.log("test run")

        // getting stored items
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if (loadedTodos) {
            setTodos(loadedTodos)
        }
    }, [])

    function getInitialTodos() {
        // getting stored items

        const temp = localStorage.getItem("todos");
        if (temp) {
            const savedTodos = JSON.parse(temp)
            return savedTodos || [];
        } else {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
                .then(res => res.json()).then(data => {
                    localStorage.setItem("todos", JSON.stringify(data));
                    return data;
                });
        }
    }

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])


    return (
                <div className="container">
                    <div className="inner">
                        <Header />
                        <InputTodo addTodoProps={addTodoItem} />
                        <TodoList
                            todos={todos}
                            handleChangeProps={handleChange}
                            deleteTodoProps={delTodo}
                            setUpdateProps={setUpdate}>
                        </TodoList>
                    </div>
                </div>
    )
}

export default TodoContainer