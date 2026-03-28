import React, {useState, cr} from "react";
import ComponentB from "./ComponentB";
function ComponentA(){

    const [user, setUser] = useState("AamirKPathan")

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello, ${user}!`}</h2>
            <ComponentB />
        </div>
    )
}
export default ComponentA;
