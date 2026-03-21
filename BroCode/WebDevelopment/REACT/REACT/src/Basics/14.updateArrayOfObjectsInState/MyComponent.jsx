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
        <h2>List Of Ca</h2>
    </div>)
}

export default MyCompone