import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Aheader from "../components/Aheader";
import Afooter from "../components/Afooter";



// axios.get(`http://localhost:3000/user`);  all data get in arr
// axios.get(`http://localhost:3000/user?country=india`);  all data get in arr
// axios.get(`http://localhost:3000/user/123455`);  get single id data object

// axios.post(`http://localhost:3000/user`,object);  insert in api
// axios.delete(`http://localhost:3000/user/1234`);  delete id data in api
// axios.patch(`http://localhost:3000/user/1234`,object);  delete id data in api

function Manage_employee() {

    //auto call when component load
    useEffect(() => {
        fetch_employee();
    }, []);

    const [data, setData] = useState([])
    const fetch_employee = async () => {

        const res = await axios.get(`http://localhost:3000/employee`)
        console.log(res.data);
        setData(res.data);
    }

    // delete function
    const deleteHandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/employee/${id}`)
        fetch_employee();
        alert('employee deleted succesfully ');
        return false;
    }

    // edit/update function
    const [formvalue, Setformvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });

    const editHandle = async (id) => {
        const res = await axios.get(`http://localhost:3000/employee/${id}`)
        Setformvalue(res.data);
    }

    const changeHandle = (e) => {
        Setformvalue({ ...formvalue, [e.target.name]: e.target.value })
    }

    const submitHandle = async (e) => {
        e.preventDefault();
        const res = await axios.patch(`http://localhost:3000/employee/${formvalue.id}`, formvalue);
        fetch_employee();
        alert('employee updated succesfully');
        return false;
    }
    
    return (
        <div>
            <Aheader title={"Manage_employee page"} />


            <div className="container mt-5 mb-5">

                <h3 className="text-center mb-4 fw-bold" style={{ color: "#0d6efd" }}>
                    Manage Employees
                </h3>

                <div className="card shadow border-0 p-3">

                    <div className="table-responsive">
                        <table className="table table-hover align-middle text-center">

                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data && data.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.mobile}</td>
                                                <td>
                                                    <button
                                                        className='btn btn-danger btn-sm me-2'
                                                        onClick={() => deleteHandle(value.id)}
                                                    >
                                                        Delete
                                                    </button>

                                                    <button
                                                        className='btn btn-primary btn-sm'
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#myModal"
                                                        onClick={() => editHandle(value.id)}
                                                    >
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

            {/* 🔥 MODAL */}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        {/* Header */}
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title">Edit Employee</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        {/* Body */}
                        <div className="modal-body">

                            <form method="post" onSubmit={submitHandle}>

                                <div className="mb-3 d-flex align-items-center">
                                    <label className="me-3" style={{ width: "120px" }}>Name:</label>
                                    <input type="text" onChange={changeHandle} value={formvalue.name} className="form-control" name="name" />
                                </div>

                                <div className="mb-3 d-flex align-items-center">
                                    <label className="me-3" style={{ width: "120px" }}>Email:</label>
                                    <input type="email" onChange={changeHandle} value={formvalue.email} className="form-control" name="email" />
                                </div>

                                <div className="mb-3 d-flex align-items-center">
                                    <label className="me-3" style={{ width: "120px" }}>Password:</label>
                                    <input type="password" onChange={changeHandle} value={formvalue.password} className="form-control" name="password" />
                                </div>

                                <div className="mb-3 d-flex align-items-center">
                                    <label className="me-3" style={{ width: "120px" }}>Mobile:</label>
                                    <input type="number" onChange={changeHandle} value={formvalue.mobile} className="form-control" name="mobile" />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mt-2"
                                    data-bs-dismiss="modal"
                                >
                                    Update
                                </button>

                            </form>

                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>



            <Afooter />
        </div>
    )
}


export default Manage_employee