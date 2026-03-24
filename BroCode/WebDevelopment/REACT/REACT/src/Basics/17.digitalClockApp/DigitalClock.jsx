import React, { use, useState } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{time.toLocaleTimeString()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;