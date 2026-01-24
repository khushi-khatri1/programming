import React,{useReducer} from "react";
const inital = 0;
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

export function reduu(state,days)
{
    switch(days)
    {
        case 'increment':
            return (state + 1) %days.length;
            break;

        case 'decrement':
            return (state - 1 + days.length) %days.length;
            break;

        case 'zero':
            return 0;
            break;

        default :
            return state;
    }
}

function Week()
{
    const[count,dispatch]=useReducer(reduu,inital)
    return(
        <div>
            <h1>Days : {days[count]}</h1>
            <button onClick={()=>{dispatch("increment")}}>increment</button>
            <button onClick={()=>{dispatch("decrement")}}>decrement</button>
            <button onClick={()=>{dispatch("zero")}}>zero</button>
        </div>
    )

}

export default Week;