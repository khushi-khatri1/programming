import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login(){

    const redirect =  useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid"))
        {
            redirect("/")
        }
    },[])

    const[form,setform] = useState({
        email : "",
        password : ""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handlesubmit = async (e)=>{
        e.preventDefault()

        try{
            const {email,password} = form 

            if(!email.trim() || !password.trim())
            {
                console.log("invalid email and password")
                toast.error("invalid email and password")
                return false;
            }

            const res=await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)
            if(res.data.length === 0)
            {
                console.log("Email does not match")
                toast.error("Email does not match")
                return false
            }

            let user = res.data[0]
            if(password!==user.password)
            {
                console.log("Email does not match")
                toast.error("Email does not match")
                return false
            }

            if(user.status=="block")
            {
                console.log("Account block .... contact admin")
                toast.error("Account block .... contact admin")
                return false
            }

            localStorage.setItem("Uid",user.id)
            localStorage.setItem("Uname",user.name)

            redirect("/")
            console.log("login successfully")
            toast.success("login succesfully")
        } catch(error) {
            console.log("api not found...", error)
        }
    }

    return(
        <div>
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <form action="" onSubmit={handlesubmit}>
                            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                    <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                                    <span><Link to="/register">Signup</Link> Account</span>

                                    <MDBBtn type='submit' size='lg'>
                                        Login
                                    </MDBBtn>


                                </MDBCardBody>
                            </MDBCard>

                        </form>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )

}

export default Login;