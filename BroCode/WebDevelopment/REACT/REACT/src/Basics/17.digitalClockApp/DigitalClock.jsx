import React, { use, useState } from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
    }, 
    []);

    return (
        <div className="clock-container">
            <div className="clock">
                <span>00:00:00</span>
            </div>
        </div>
    );
}

export default DigitalClock;