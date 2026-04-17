import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';


    // axios.get(`http://localhost:3000/user`);  all data get in arr
    // axios.get(`http://localhost:3000/user?country=india`);  all data get in arr
    // axios.get(`http://localhost:3000/user/123455`);  get single id data object

    // axios.post(`http://localhost:3000/user`,object);  insert in api
    // axios.delete(`http://localhost:3000/user/1234`);  delete id data in api
    // axios.patch(`http://localhost:3000/user/1234`,object);  delete id data in api

function Manage_user() {

    //auto call when component load
    useEffect(() => {
        fetch_user();
    }, []);

    const [data, setData] = useState([])
    const fetch_user = async () => {

        const res = await axios.get(`http://localhost:3000/user`)
        console.log(res.data);
        setData(res.data);
    }

    // delete function
    const deleteHandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`)
        fetch_user();
        alert('user deleted succesfully ');
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
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        Setformvalue(res.data);
    }

    const changeHandle = (e) => {
        Setformvalue({ ...formvalue, [e.target.name]: e.target.value })
    }

    const submitHandle=async(e)=>{
        e.preventDefault();
        const res = await axios.patch(`http://localhost:3000/user/${formvalue.id}`,formvalue);
        fetch_user();
        alert('user updated succesfully');
        return false;
    }
    return (
        <div>
            <Header title={"Manage_user page"} />
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((value, index, arr) => {
                            return (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.mobile}</td>
                                    <td>
                                        <button className='btn btn-danger m-2' onClick={() => deleteHandle(value.id)}>Delete</button>
                                        <button className='btn btn-primary m-2' data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>editHandle(value.id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

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
                                
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Submit</button>
                            </form>
                        </div>

                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        )
}


export default Manage_user