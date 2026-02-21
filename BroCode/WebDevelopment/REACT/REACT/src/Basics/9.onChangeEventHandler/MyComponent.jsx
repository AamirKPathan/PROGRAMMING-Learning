// onChange = event handler used primarily with form elements to capture user input and update the component's state accordingly. It allows you to respond to changes in input fields, such as text boxes, checkboxes, or dropdowns, by executing a function whenever the value of the input changes. This is essential for creating interactive and dynamic user interfaces in React applications.

import React, {useState} from 'react';

function MyComponent() {
 
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    return(<div>
        <input value = {name} onChange = {handleNameChange}/>
        <p>Name: {name}</p>
        <input value = {quantity} onChange = {handleQuantityChange} type = "number"/>
        <p>Quantity: {quantity}</p>
        <textarea value = {comment} onChange = {handleCommentChange} placeholder = "Enter delivery instructions"/>
        <p>Comment: {comment}</p>
        <select value = {payment} onChange = {handlePaymentChange}>
            <option value = "credit">Credit Card</option>
            <option value = "debit">Debit Card</option>
            <option value = "paypal">PayPal</option>
        </select>
        <p>Payment Method: {payment}</p>
    </div>);
}
export default MyComponent