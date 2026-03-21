import React, { use, useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take A Shower"]);
    const [newTask, setNewTask] = useState("");

    // Declare Functions
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {

    }
    function deleteTask(index) {

    }
    function moveTaskUp(index) {

    }
    function moveTaskDown(index) {
    
    }


    return(
    <div>
        <h1>To Do List</h1>
        <div>
            <input
                type="text"
                placeholder="Enter A Task"
                value={newTask}
                onChange={handleInputChange}
            />
            <button className="add-button" onClick={addTask}>Add Task</button>
        </div>
    </div>);
}

export default ToDoList;