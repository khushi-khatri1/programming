import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register(){

    const redirect = useNavigate()

    const[form,setform] = useState({
        id:"",
        name:"",
        email:"",
        password:"",
        status : ""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            id : new Date().getTime().toString(),
            status : "unblock",
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    const getdata=async(e)=>{
        e.preventDefault()

        try{
            if(!form.email.trim() || !form.password.trim() || !form.name.trim())
            {
                console.log("Pls Enter your email and password.. name!")
                toast.error("Pls Enter your email and password.. name!")
                return false
            }

            const res = await axios.post("http://localhost:3000/user",form)
            console.log(res.data)
            redirect("/login")
            toast.success("registration successfully")
        }catch(error){
            console.log("do not match api..",error)
        }
    }

    return(
        <div>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <form action="" onSubmit={getdata}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            <MDBInput value={form.name} name='name' onChange={getchange} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput value={form.email} name='email'onChange={getchange} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                            <div className='d-flex flex-row justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                            </div>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </form>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default Register;