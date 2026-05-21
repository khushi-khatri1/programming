import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Aheader from "../components/Aheader";
import Afooter from "../components/Afooter";



function Booking_details() {
    
    useEffect(() => {
        fetch_booking();
    },[]);

    const redirect = useNavigate();

    const [data,setData] = useState([]);
    
    const fetch_booking = async () =>{
        const res = await axios.get(`http://localhost:3000/booking`);
        console.log(res.data);
        setData(res.data);
    }

    return(
        <>
        <Aheader title={"Booking_details"} />


            <div className="container mt-5 mb-5">

                <h3 className="text-center mb-4 fw-bold" style={{ color: "#0d6efd" }}>
                    Booking_details
                </h3>

                <div className="card shadow border-0 p-3">

                    <div className="table-responsive">
                        <table className="table table-hover align-middle text-center">

                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phoneno</th>
                                    <th>Service</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Address</th>
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
                                                <td>{value.phoneno}</td>
                                                <td>{value.service}</td>
                                                <td>{value.date}</td>
                                                <td>{value.time}</td>
                                                <td>{value.address}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
            <Afooter/>

        </>
    )
   
}
export default Booking_details;