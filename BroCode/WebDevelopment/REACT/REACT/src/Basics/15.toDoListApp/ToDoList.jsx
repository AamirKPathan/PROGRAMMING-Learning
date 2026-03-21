import React, { use, useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Declare Functions
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== 
    }
    function moveTaskUp(index) {

    }
    function moveTaskDown(index) {
    
    }


    return(<></>);
}

export default ToDoList;