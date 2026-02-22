import { useState } from 'react';

// updater function = A function that updates the state based on the previous state

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    function decrement() {
        setCount(prevCount => prevCount - 1);
    };

    function reset() {
        setCount(0);
    };

    return (
        <div className="counter">
            <h1>Counter: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default MyComponent;