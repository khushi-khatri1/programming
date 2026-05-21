import { useEffect, useState } from "react";
import Afooter from "./components/Afooter";
import Aheader from "./components/Aheader";
import axios from "axios";

function Manage_products() {

    useEffect(() => {
        fetch_products();
    }, []);

    const [productdata, setProductdata] = useState([]);
    const fetch_products = async () => {
        const res = await axios.get(`http://localhost:4000/getdata`);
        console.log(res.data);
        setProductdata(res.data);
    }

    const deletehandle = async(id)=>{
        const res = await axios.delete(`http://localhost:4000/delete/${id}`);
        fetch_products();
        alert(res.data.status);
        //console.log(res.data);
        return false;
    }

     const [formvalue, setFormvalue] = useState({
            pname: "",
            comapny: "",
            qty: "",
            price:"",
            availability: ""
        });

    const edithandle = async(id)=>{
        const res = await axios.get(`http://localhost:4000/getsingle/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const changehandle = async(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value})
        console.log(formvalue._id);    
    }

    const submithandle = async(e)=>{
        e.preventDefault();
        const res = await axios.put(`http://localhost:4000/update/${formvalue._id}`,formvalue);
        fetch_products();
        alert(res.data.status);
        return false;
    }


    return (
        <>
            <Aheader />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Manage products </h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>pname</th>
                                    <th>company</th>
                                    <th>qty</th>
                                    <th>price</th>
                                    <th>availability</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    productdata.map((value, index, arr) => {

                                        return (
                                            <tr>
                                                <td>{value.pname}</td>
                                                <td>{value.company}</td>
                                                <td>{value.qty}</td>
                                                <td>{value.price}</td>
                                                <td>{value.availability}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={()=>deletehandle(value._id)}>Delete</button>
                                                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>edithandle(value._id)}>Edit</button>
                                                    <div className="modal" id="myModal">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                {/* Modal Header */}
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Edit User</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                                </div>
                                                                {/* Modal body */}
                                                                <div className="modal-body">
                                                                    <div className="container mt-3">
                                                                        <form action="" method='post'>
                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="email">pname:</label>
                                                                                <input type="name" onChange={changehandle} value={formvalue.pname} className="form-control" id="name" placeholder="Enter pname" name="pname" />
                                                                            </div>

                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="company">company:</label>
                                                                                <input type="name" onChange={changehandle} value={formvalue.company} className="form-control" id="company" placeholder="Enter company" name="company" />
                                                                            </div>

                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="qty">qty:</label>
                                                                                <input type="name" onChange={changehandle} value={formvalue.qty} className="form-control" id="qty" placeholder="Enter qty" name="qty" />
                                                                            </div>

                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="price">price:</label>
                                                                                <input type="name" onChange={changehandle} value={formvalue.price} className="form-control" id="price" placeholder="Enter price" name="price" />
                                                                            </div>

                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="availability">availability:</label>
                                                                                <input type="name" onChange={changehandle} value={formvalue.availability} className="form-control" id="availability" placeholder="Enter availability" name="availability" />
                                                                            </div>
                                                                           


                                                                            <button type="submit" className="btn btn-primary" onClick={submithandle} data-bs-dismiss="modal">Save</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* Modal footer */}
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-danger" >Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>
                        </table>


                    </div>
                </div>
            </div>

            <Afooter />

        </>
    )
}

export default Manage_products;