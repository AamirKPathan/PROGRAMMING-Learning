import React, {useState, useContext, useRef} from "react";
function ComponentD(){

    let [number, setNumber] = useState(0);
    const ref = useRef(null);

    const handleClick = () => {
        setNumber(number + 1);
        ref.current.focus();
    };

    return(
        <button onClick={handleClick}>
            Click Me!
        </button>
    )
}
export default MyComponent;