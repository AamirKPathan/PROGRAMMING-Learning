import React, { use, useState } from 'react';

function MyComponent() {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    // Declare Functions
    function HandleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(c => [...c, newCar]);
    }
    function HandleRemoveCar(index) {
        setCars(c => c.filter((car, i) => i !== index));
    }
    function HandleYearChange(event) {
        setCarYear(event.target.value);
    }
    function HandleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function HandleModelChange(event) {
        setCarModel(event.target.value);
    }
    return(<div>
        <h2>List Of Car Objects</h2>
        <ul>
            {cars.map((car, index) => (
                <li key={index}>
                    {`${car.year} 
                    ${car.make} 
                    ${car.model}`}
                </li>
            ))}
        </ul>
        <input type="number" placeholder='Year' value={carYear} onChange={HandleYearChange}/>
        <br/>
        <input type="text" placeholder='Make' value={carMake} onChange={HandleMakeChange}/>
        <br/>
        <input type="text" placeholder='Model' value={carModel} onChange={HandleModelChange}/>
        <br/>
        <button onClick={HandleAddCar}>Add Car</button>
    </div>)
}

export default MyComponent;