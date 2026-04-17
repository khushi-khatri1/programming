import { useDispatch , useSelector } from "react-redux";
import { Hide,Minus,Show,Plus,Toggle } from "../app/userSlice";
import Img from "./image";

function Mytask() {
    const {number , isImage } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return(
        <>
            <h1>My Cart</h1>
            <button className="btn btn-primary" onClick={()=>dispatch(Plus())}>+</button>
                <h1>{number}</h1>
            <button className="btn btn-primary" onClick={()=>dispatch(Minus())}>-</button>
            <button className="btn btn-primary" onClick={()=>dispatch(Hide())}>Hide</button>
            <button className="btn btn-primary" onClick={()=>dispatch(Show())}>Show</button>
            <button className="btn btn-primary" onClick={()=>dispatch(Toogle())}>Hide/Show</button>
            {
                isImage? <Img/> : null
            }
        </>
    )
}

export default Mytask;