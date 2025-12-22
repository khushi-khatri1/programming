import React from "react";
import C from './C'
//prop drilling

function B({name,setname})
{
        return(
            <div>
                <h1>Hello this component B</h1>

                <h1>Hello this name :- {name}</h1>
                <button onClick={()=>setname("anjali singhal")}>change name</button>
                <C name={name} setname={setname}/>
            </div>
        )
}

export default B