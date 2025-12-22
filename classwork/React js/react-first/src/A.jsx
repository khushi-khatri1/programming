import React, { useState } from "react";
import B from './B'
//prop drilling

function A()
{
    const[name,setname]=useState("Khushi Khatri")
    return(
        <div>
            <h1>Hello this component A</h1>
            <B name={name} setname={setname}/>
        </div>
    )
}

export default A