import React, { use, useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Declare Functions
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    

    return(<></>);
}

export default ToDoList;