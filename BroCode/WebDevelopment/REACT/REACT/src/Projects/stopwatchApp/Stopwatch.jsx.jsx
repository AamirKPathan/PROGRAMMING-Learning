import React, {useState, useContext, useRef, useEffect} from "react";
function Stopwatch(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }
        
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = () => {
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        const centiseconds = Math.floor((time % 1000) / 10);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(centiseconds).padStart(2, '0')}`;
    };

    return(
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <div className="display">{formatTime()}</div>
            <div className="buttons">
                <button className="start" onClick={handleStart}>Start</button>
                <button className="stop" onClick={handleStop}>Stop</button>
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
export default Stopwatch;