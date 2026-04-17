import React, { useState , useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { userinsert } from '../../app/userSlice'

function Add_user() {

    const dispatch = useDispatch();
    const[formvalue,Setformvalue]=useState({
        name : "",
        email : "",
        password : "",
        mobile : "",
    })

    const changeHandle=(e)=>{
        Setformvalue({...formvalue,id:new Date().getTime().toString(),status:"unblock",[e.target.name]:e.target.value})
    }

    const submitHandle=async(e)=>{
        e.preventDefault();
        dispatch(userinsert(formvalue));
        Setformvalue({...formvalue,name:"",email:"",password:"",mobile:""});
        alert('user added succesfully');
        return false;
    }

    return (
        <div>
            <Header title="Add_user" />
           <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Add User</h2>
                            <form action="" method="post" onSubmit={submitHandle}>
                                 <div className="mb-3 mt-3">
                                    <label htmlFor="email">Name:</label>
                                    <input type="text" onChange={changeHandle} value={formvalue.name} className="form-control" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={changeHandle} value={formvalue.email} className="form-control"  placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" onChange={changeHandle} value={formvalue.password} className="form-control"  placeholder="Enter password" name="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Mobile:</label>
                                    <input type="number" onChange={changeHandle} value={formvalue.mobile} className="form-control"  placeholder="Enter Mobile" name="mobile" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>


            <Footer />
        </div>
    )
}

export default Add_user