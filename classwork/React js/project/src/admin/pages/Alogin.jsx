import { useEffect,useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import Aheader from "../components/Aheader";
import Afooter from "../components/Afooter";


function Alogin(){

    const redirect = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('s_id')){
            redirect('/dashboard')
        }
    })

    const[formvalue,setFormvalue] = useState({
        email : "",
        password : "",
    })

    const changeHandle = (e) =>{
        setFormvalue({...formvalue,[e.target.name] : e.target.value});
        console.log(formvalue);
    }

    const validation = () =>{
        var result = true;
        if(formvalue.email =="" || formvalue.email)
        {
            result = false;
            alert('Email field is required')
            return false;
        }
        if(formvalue.password =="" || formvalue.password)
        {
            result = false;
            alert('password field is required')
            return false;
        }
        return result;
    }

    const submitHandle = async (e) =>{
        e.preventDefault();
        if(validation)
        {
            const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`)
            if(res.data.length > 0)
            {
                if(res.data[0].password == formvalue.password)
                {
                    if(res.data[0].status == "Unblock") //just for example aa khali user mate hoy
                    {
                        localStorage.setItem('s_id',res.data[0].id);
                        localStorage.setItem('s_name',res.data[0].name);

                        redirect('/dashboard')
                        alert('Login success')
                        return false;
                    }
                    else
                    {
                        alert('Login failed due to Blocked account')
                        return false;
                    }
                }
                else
                {
                    alert('Login failed due to wrong password')
                    return false;
                }
            }
            else
            {
                alert('Login failed due to email does not exists')
                return false;
            }
        }
    }

    return(
         <div>
            <div>
                <Aheader/>
                <div className="p-5 bg-primary text-white text-center">
                    <h1>Admin Login</h1>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Login Form</h2>
                            <form action="" method="post" onSubmit={submitHandle}>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={changeHandle} value={formvalue.email} className="form-control" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" onChange={changeHandle} value={formvalue.password} className="form-control" placeholder="Enter password" name="password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>

                        </div>

                    </div>
                </div>
                <Afooter />
            </div>
        </div>
    )
}

export default Alogin;