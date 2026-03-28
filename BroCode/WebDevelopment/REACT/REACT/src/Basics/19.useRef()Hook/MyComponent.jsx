import React, {useState, useContext, useRef} from "react";
function MyComponent(){

    const ref = useRef(0);

    useEffect(() => {
        console.log("Component rendered");
    })

    let [number, setNumber] = useState(0);
    function handleClick(){
        
    }
    return(
        <button onClick={handleClick}>
            Click Me!
        </button>
    )
}
export default MyComponent;