import React, { useState } from 'react';

function MyComponent() {
    const [foods, setFoods] = useState(['Pizza', 'Burger', 'Pasta']);

    function handleAddFood() {

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
        <input type="text" placeholder='Enter ' />
    </>);
}

export default MyComponent;