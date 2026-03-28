import React, { useState } from "react";
import ComponentB from "./ComponentB";
function ComponentA(){

    const [user, setUser] = useState("AamirKPathan")

    return(
        <div className="box">
            <h1>Component A</h1>
            <ComponentB />
        </div>
    )
}
export default ComponentA;
