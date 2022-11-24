import React, {useState} from "react";
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props)=>{
    // const [inputText, setInputText] = useState({title:""});
    const [title, setTitle] = useState("");
    const onChange = (e)=>{
        setTitle(e.target.value);
        // setInputText({
        //     ...inputText,
        //     [e.traget.name]: e.traget.value
        // });
    }
    const addTodoItem = (e)=>{
        e.preventDefault();
        if(title.trim()){
            props.addTodoProps(title);
            setTitle("")
        } else {
            alert('Please enter todo item to add');
        }
        // if(inputText.title.trim()){
        //     props.addTodoProps(inputText.title);
        //     setInputText({
        //         title:""
        //     })
        // } else {
        //     alert('Please enter todo item to add');
        // }
    }
    return (
        <form onSubmit={addTodoItem} className="form-container">
            <input 
                type="text"
                className="input-text"
                placeholder="Add todo.."
                value={title}
                name="title"
                onChange={onChange}/>
            <button className="btn">
                <FaPlusCircle style={{color:"darkcyan", fontSize:"20px", marginTop:"2px"}}/>
            </button>
        </form>
    )
}

export default InputTodo