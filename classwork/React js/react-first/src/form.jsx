import { useState } from "react";
function Form()
{
    const [name,setName]=useState("");
    const [phno,setPhno]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpass,setConfirmpass]=useState("");

    return(
        <div className="form">
            <form action="">
            <label htmlFor="">Enter Name:</label>
            <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
                console.log(e.target.value)
            }} required/><br/><br/>

            <label htmlFor="">Enter PhoneNo:</label>
            <input type="number" value={phno} onChange={(e)=>setPhno(e.target.value)} required/><br/><br/>

            <label htmlFor="">Enter Email :</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/><br/>

            <label htmlFor="">Enter Password:</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/><br/>

            <label htmlFor="">Confirm Password:</label>
            <input type="password" value={confirmpass} onChange={(e)=>setConfirmpass(e.target.value)} required/><br/><br/>

            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form