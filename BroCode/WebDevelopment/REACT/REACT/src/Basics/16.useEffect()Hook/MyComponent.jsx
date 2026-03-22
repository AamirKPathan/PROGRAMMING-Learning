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
import React, { use, useState } from 'react';

function MyComponent() {
    

    return(<></>)
}

export default MyComponent;