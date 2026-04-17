import { useEffect,useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


function Manage_contact() {
    
    useEffect(() => {
        fetch_contact();
    },[]);

    const redirect = useNavigate();

    const [data,setData] = useState([]);
    const fetch_contact = async () =>{
        const res = await axios.get(`http://localhost:3000/contact`);
        console.log(res.data);
        setData(res.data);
    }

    //delete 
    const deleteHandle = async (id) =>{
        const res = await axios.delete(`http://localhost:3000/contact/${id}`)
        fetch_contact();
        alert('user deleted succesfully');
        return false;
    }
   
    return(
        <div>
            <Header title={"Manage_contact page"} />
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>comment</th>
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
                                    <td>{value.password}</td>
                                    <td>{value.comment}</td>
                                    <td>
                                        <button className='btn btn-danger m-2' onClick={() => deleteHandle(value.id)}>Delete</button>
                                         <button className='btn btn-primary m-2' onClick={() => redirect('/Edit_contact/' + value.id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Manage_contact;