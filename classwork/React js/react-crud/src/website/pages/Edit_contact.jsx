import { useEffect,useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate , useParams } from "react-router-dom";

function Edit_contact(){

    useEffect(() => {
        editHandle();
    }, []);

    const redirect=useNavigate();

    //edit/update
     const [formvalue,setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        comment: ""
    });

    const {id}=useParams();
    const editHandle = async () =>{
        console.log("Calling API with ID:", id);
        const res = await axios.get(`http://localhost:3000/contact/${id}`)
        setFormvalue(res.data);    

    }

    const changeHandle = (e) =>{
        setFormvalue({...formvalue,[e.target.name] : e.target.value})
        console.log(formvalue);
    }

    const submitHandle = async (e) =>{
        e.preventDefault();
        const res = await axios.patch(`http://localhost:3000/contact/${formvalue.id}`,formvalue);
        redirect('/Manage_contact');
        alert('contact updated succesfully');
        return false;
    }

    return(
         <div>
            <div>
                <Header title="edit contact page" />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Edit Contact</h2>
                            <form action="" method="post" onSubmit={submitHandle}>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" onChange={changeHandle} value={formvalue.name} className="form-control" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={changeHandle} value={formvalue.email} className="form-control" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" onChange={changeHandle} value={formvalue.password} className="form-control" placeholder="Enter password" name="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="comment">Comment:</label>
                                    <input type="text" onChange={changeHandle} value={formvalue.comment} className="form-control" placeholder="Enter comment" name="comment" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )

}

export default Edit_contact;