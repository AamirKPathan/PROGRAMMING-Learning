import React, { use, useState } from 'react';

function MyComponent() {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    // Declare Functions
    function HandleAddCar() {

    }
    function HandleRemoveCar(index) {

    }
    function HandleYearChange(event) {

    }
    function HandleMakeChange(event) {

    }
    function HandleModelChange(event) {

    }
    return(<div>
        <h2>List Of Car Objects</h2>
        <ul>

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