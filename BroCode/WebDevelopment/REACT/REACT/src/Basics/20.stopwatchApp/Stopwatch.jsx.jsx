import React, {useState, useContext, useRef, useEffect} from "react";
function MyComponent(){

    const ref = useRef(0);

    useEffect(() => {
        console.log("Component rendered");
    })

    function handleClick(){
        ref.current = ref.current + 1;
        console.log(ref.current);
    }
    return(
        <button onClick={handleClick}>
            Click Me!
        </button>
    )
}
export default Stopwatch;