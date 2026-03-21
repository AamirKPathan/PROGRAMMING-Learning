import React, { use, useState } from 'react';

function MyComponent() {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
}

export default MyComponent;