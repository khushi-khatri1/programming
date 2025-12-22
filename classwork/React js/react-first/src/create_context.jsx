import { useState } from "react";

export default function Create_context()
{
    const[choice,setchoice]=useState('English');

    function click_here(event)
    {
        setchoice(event.target.value)
    }

    return(
        <>
        <select name="" id="" onChange={(event)=>setchoice(event.target.value)}>
            <option value="English">English</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Gujarati">Gujarati</option>
        </select>
        <h1>Value by default : {choice}</h1>
        </>
    )
}