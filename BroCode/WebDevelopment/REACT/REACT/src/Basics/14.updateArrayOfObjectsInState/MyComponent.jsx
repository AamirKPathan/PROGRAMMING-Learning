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
    </div>)
}

export default MyComponent;