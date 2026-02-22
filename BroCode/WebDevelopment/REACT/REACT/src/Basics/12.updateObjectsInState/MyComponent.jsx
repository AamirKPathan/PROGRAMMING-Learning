import React, { useState } from 'react';

function MyComponent() {
    const [car, setCar] = useState({
        year: 2025,
        make: "Lamborghini",
        model: "Huracan"
    });

    function handleYearChange(event){

    }
    

    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type = "number" placeholder='Year' onChange={(e) => setCar(prevCar => ({...prevCar, year: e.target.value}))} />
        <input type = "text" placeholder='Make' onChange={(e) => setCar(prevCar => ({...prevCar, make: e.target.value}))} />
        <input type = "text" placeholder='Model' onChange={(e) => setCar(prevCar => ({...prevCar, model: e.target.value}))} />
    </div>
    )
}
export default MyComponent;