import React, { useState } from "react";
import Aheader from "../Acomman/Aheader";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

function Blogadd(){
    const [blog,setBlog] = useState({
        id:"",
        img:"",
        date:"",
        month:"",
        year:"",
        desc:""
    })

    const getchange=(e)=>{
        setBlog({
            ...blog,
            //new id create
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }

    const handlesumbit = async (e) =>{
        e.preventDefault()

        try{
            const res = await axios.post("http://localhost:3000/blog",blog)
            console.log(res.data)
            setBlog({
                    id:"",
                    img:"",
                    date:"",
                    month:"",
                    year:"",
                    desc:""
            })
            redirect("/blogmanager")
        }catch(error){
            console.log("data not found")
        }
    }

return(
    <>
        <Aheader />
        <h1 className='text-center'>hello this Blog data Add</h1>
            <div className="container">
                <div className="bg-light rounded h-100 p-5">
                    <form onSubmit={handlesumbit}>
                        <div className="row g-3">
                            <div className="col-6">
                                <input type="url" name='img' onChange={getchange} value={blog.img} className="form-control bg-white border-0 px-4" placeholder="Your Image"  />
                            </div>
                            <div className="col-6">
                                <input type="date" name='date' onChange={getchange} value={blog.date} className="form-control bg-white border-0 px-4" placeholder="Your date" style={{ height: 55 }} />
                            </div>
                            <div className="col-6">
                                <select value={blog.month} name='month' onChange={getchange} className="form-select bg-white border-0 px-4" aria-label="Default select example" style={{ height: 55 }}>
                                    <option hidden>select your month</option>
                                    <option value="JAN">JAN</option>
                                    <option value="FEB">FEB</option>
                                    <option value="MARCH">MARCH</option>
                                    <option value="APRIL">APRIL</option>
                                    <option value="MAY">MAY</option>
                                    <option value="JUNE">JUNE</option>
                                    <option value="JULY">JULY</option>
                                    <option value="AUG">AUG</option>
                                    <option value="SPET">SPET</option>
                                    <option value="AUTO">AUTO</option>
                                    <option value="NOV">NOV</option>
                                    <option value="DEC">DEC</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <select value={blog.year} name='year' onChange={getchange} className="form-select bg-white border-0 px-4" aria-label="Default select example" style={{ height: 55 }}>
                                    <option hidden>select your Year</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <textarea value={blog.desc} name='desc' onChange={getchange} className="form-control bg-white border-0 px-4 py-3" rows={4} placeholder="Enter your Description" />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">ADD BLOG</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </>
)
}

export default Blogadd;