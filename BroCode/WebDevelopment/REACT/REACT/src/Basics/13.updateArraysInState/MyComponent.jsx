import React, { useState } from 'react';

function MyComponent() {
    const [foods, setFoods] = useState(['Pizza', 'Burger', 'Pasta']);

    function handleAddFood() {

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood() {

    }

    return(<>
        <h2>List Of Food</h2>
        <ul>
            {foods.map((food, index) => (
                <li key={index}>{food}</li>
            ))}
        </ul>
        <input type="text" placeholder='Enter a food item' />
        <button onClick={handleAddFood}>Add Food</button>
        <button onClick={handleRemoveFood}>Remove Food</button>
    </>);
}

export default MyComponent;