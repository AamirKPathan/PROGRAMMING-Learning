import React, { useState } from 'react';

function MyComponent() {
    const [car, setCar] = useState({
        year: 2025,
        make: "Lamborghini",
        model: "Huracan"
    });

    return (<div>
        <p></p>
    </div>
    )
}