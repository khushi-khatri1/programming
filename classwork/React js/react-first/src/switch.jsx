import React,{useReducer} from "react";

const inital = 0;

export  function reducer(state,action)
{
    switch(action)
    {
        case 'increment':
            return state + 1;
            break;

        case 'decrement':
            return state - 1;
            break;

        case 'zero':
            return inital;
            break;

        default :
            return state;
            break;
    }
}

function Useredu()
{
    const[count,dispatch] = useReducer(reducer,inital)

    return(
        <div>       
            <h1>reducer logic</h1>
            <h1>count :{count}</h1>
            <button onClick={()=>{dispatch("increment")}}>increment</button>
            <button onClick={()=>{dispatch("decrement")}}>decrement</button>
            <button onClick={()=>{dispatch("zero")}}>zero</button>
        </div>
    )
}

export default Useredu