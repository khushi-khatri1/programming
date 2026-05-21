import React, { useState } from "react";
import Aheader from "./components/Aheader";
import Afooter from "./components/Afooter";
import axios from "axios";

function Add_products() {
    const [formvalue, setFormvalue] = useState({
        pname: "",
        comapny: "",
        qty: "",
        price:"",
        availability: ""
    });

    const changehandle = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const submithandle = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:4000/postdata`, formvalue);
        setFormvalue({ ...formvalue, pname: "", company: "", qty: "",price:"", availability: "" });
        alert(res.data.result);
        return false;
    }

    return (
        <div>
            <Aheader />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add Data</h2>
                        <div className="container mt-3">
                            <form action="" method='post' onSubmit={submithandle}>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="pname">pname:</label>
                                    <input type="name" onChange={changehandle} value={formvalue.pname} className="form-control" id="pname" placeholder="Enter pname" name="pname" />
                                </div>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="company">company:</label>
                                    <input type="name" onChange={changehandle} className="form-control" value={formvalue.company} id="company" placeholder="Enter company" name="company"/>
                                </div>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="qty">qty:</label>
                                    <input type="name"  onChange={changehandle} className="form-control" value={formvalue.qty} id="qty" placeholder="Enter qty" name="qty"/>
                                </div>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="price">price:</label>
                                    <input type="price"  onChange={changehandle} className="form-control" value={formvalue.price} id="price" placeholder="Enter price" name="price"/>
                                </div>


                                 <div className="mb-3 mt-3">
                                    <label htmlFor="availability">availability:</label>
                                    <input type="name" onChange={changehandle} className="form-control" value={formvalue.availability} id="availability" placeholder="Enter availability" name="availability"/>
                                 </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
            <Afooter />
        </div>
    )
}

export default Add_products;