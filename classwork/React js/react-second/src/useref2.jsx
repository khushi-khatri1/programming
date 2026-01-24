import { useState,useRef,useEffect} from "react";

export default function Previous()
{
    const [count,setCount] = useState(0);

    const Previouscount = useRef();

    useEffect(() => {
        Previouscount.current = count;
    },[count]);

    return(
        <>
            <p>current count : {count}</p>
            <p>Previous count : {Previouscount.current}</p>
            <button onClick={()=>setCount(count+1)}>increase</button>
            <hr/>
        </>
    )
}