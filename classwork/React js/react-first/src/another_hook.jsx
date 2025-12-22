import { useState } from "react";
import usecustom from "./custom_hook";

export default function Hook_hello()
{
    const[value,togglevalue]=usecustom(true);
    return(
        <>
            <button onClick={togglevalue}>{value?"hide":"show"}</button>
            
            {
                value?<h1>custom hook run succesfully</h1>:null
            }
        </>
    )
}
