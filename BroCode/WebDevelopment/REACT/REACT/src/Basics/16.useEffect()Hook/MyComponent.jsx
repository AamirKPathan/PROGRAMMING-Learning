// useEffect() Hook
// - allows us to perform side effects in our components
// - runs after every render (by default)
// - can be used to fetch data, set up subscriptions, and manually change the DOM in React components

// useEffect(() => {},[]) Runs only on mount
// useEffect(() => {},[value]) Runs on mount and when state changes

//USES

// 1. Event Listeners
// 2. DOM manipulation
// 3. Subscriptions
// 4. Fetching Data from an API
// 5. Cleanup (e.g., removing event listeners, canceling subscriptions, etc.)
import React, { useState, useEffect } from 'react';

function MyComponent() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // Do the document title change only when count changes

    function addCount(){
        setCount(c => c + 1);
    }


    return(<>
        <h1>Count: {count}</h1>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
    </>)
}

export default MyComponent;