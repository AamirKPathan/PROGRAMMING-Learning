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
        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button className="move-up-button" onClick={() => moveTaskUp(index)}>Move Up</button>
                    <button className="move-down-button" onClick={() => moveTaskDown(index)}>Move Down</button>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ol>
    </div>);
}

export default ToDoList;