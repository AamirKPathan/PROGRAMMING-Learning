import React, { useState } from 'react';

function MyComponent() {
    const [car, setCar] = useState({
        year: 2025,
        make: "Lamborghini",
        model: "Huracan"
    });

    function handleYearChange(event){

    }
    function handleMakeChange(event){
        
    }
    function handleModelChange(event){
        
    }

    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" placeholder="Year" onChange={handleYearChange} />
        <input type="text" placeholder="Make" onChange={handleMakeChange} />
        <input type="text" placeholder="Model" onChange={handleModelChange} />
    </div>
    )
}
export default MyComponent;