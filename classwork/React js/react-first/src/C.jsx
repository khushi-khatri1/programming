import React from "react";
import D from './D'
//prop drilling

function C({name,setname})
{
        return(
            <div>
                <h1>Hello this component C</h1>

                <D name={name} setname={setname}/>
            </div>
        )
}

export default C