// onChange = event handler used primarily with form elements to capture user input and update the component's state accordingly. It allows you to respond to changes in input fields, such as text boxes, checkboxes, or dropdowns, by executing a function whenever the value of the input changes. This is essential for creating interactive and dynamic user interfaces in React applications.

import React, {useState} from 'react';

function MyComponent() {
 
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("Number");
    function handleNameChange(event){
        setName(event.target.value);
    }

    return(<div>
        <input value = {name} onChange = {handleNameChange}/>
        <p>Name: {name}</p>
    </div>);
}
export default MyComponent