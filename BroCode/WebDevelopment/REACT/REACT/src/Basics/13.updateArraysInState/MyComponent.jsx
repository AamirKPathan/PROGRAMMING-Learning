import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Cherry"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.get
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
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>
    );
}

export default MyComponent;