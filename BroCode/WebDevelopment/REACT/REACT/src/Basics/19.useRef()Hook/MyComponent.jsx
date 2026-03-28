import React, {useState, useContext, useRef} from "react";
function ComponentD(){

    let [number, setNumber] = useState(0);
    function handleClick(){
        setNumber(n => n + 1)
    }
    return(
        <button onClick={handleClick}>
            Click Me!
        </button>
    )
}
export default MyComponent;