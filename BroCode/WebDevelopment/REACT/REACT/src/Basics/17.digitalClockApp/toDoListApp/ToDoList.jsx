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
        setTasks(t => t.filter((_, i) => i !== index));
    }
    function moveTaskUp(index) {
        if (index > 0) {
            setTasks(t => {
                const newTasks = [...t];
                [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
                return newTasks;
            });
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            setTasks(t => {
                const newTasks = [...t];
                [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
                return newTasks;
            });
        }
    }


    return(
    <div className="to-do-list">
        <h2>To Do List</h2>
        <div>
            <input
                type="text"
                placeholder="Enter A Task"
                value={newTask}
                onChange={handleInputChange}
            />
        </div>
        <button className="add-button" onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="up-button" onClick={() => moveTaskUp(index)}>Up</button>
                    <button className="down-button" onClick={() => moveTaskDown(index)}>Down</button>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>);
}

export default ToDoList;