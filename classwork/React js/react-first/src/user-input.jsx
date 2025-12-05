import { useState } from "react";

function Show()
{
    const[text,setText] = useState("")

    return(
        <>
        <label htmlFor="">Enter : </label>
        <input type="text" placeholder="type something ..." onChange={(e)=> setText(e.target.value)} />

        <h1>{text}</h1>
        </>
    )
}
export default Show;