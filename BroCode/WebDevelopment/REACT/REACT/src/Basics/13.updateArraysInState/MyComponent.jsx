import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Cherry"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods([...foods, newFood]);
    }

    function handleRemoveFood() {

    }

    return (
        <div>
            <h2>Foods</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;