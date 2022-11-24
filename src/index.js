import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import Layout from './functionBased/pages/Layout';

export default function App() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<TodoContainer />}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="*" element={<NotMatch/>}></Route>
                    </Route>
                </Routes>
            </Router>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
