import React,{useState,useEffect} from 'react'
import Aheader from '../Acomman/Aheader'
import axios from 'axios'
import { MDBTable,MDBTableHead,MDBTableBody } from 'mdb-react-ui-kit'

function BlogsMan(){
    const[blog,setBlog] = useState([])
    
    useEffect(()=>{
        fetchData() 
    },[])

    const fetchData = async ()=>{
        const res = await axios.get("http://localhost:3000/blog") 
        setBlog(res.data)
    }

    //view data
    const[view,setView] = useState({
        id : "",
        img : "",
        date : "",
        month : "",
        year : "",
        desc : "",
    })

    const viewdata = async(id)=>{
        const res = await axios.get(`http://localhost:3000/blog/${id}`)
        console.log(res.data)
        setView(res.data)
    }

    //delete function
    const deleteData = async(id)=>{
        await axios.delete(`http://localhost:3000/blog/${id}`)
    }

    //model created closed null
    const[editform,setEditform] = useState(null)
    const[blogedit,setBlogedit] = useState({
        id : "",
        img : "",
        date : "",
        month : "",
        year : "",
        desc : "",
    })

    const savedata = (data) =>{
        setEditform(data)
        setBlogedit(data)
    }

    const getchange = (e) => {
        setBlogedit({
            ...blogedit,
            [e.target.name] : e.target.value
        })
        console.log(editform)
    }
    console.log(blogedit)

    const handleupdate = async(e) =>{
        e.preventDefault()
        try{
            const res = await axios.put(`http://localhost:3000/blog/${blogedit.id}`,blogedit)
            console.log(res.data)
            fetchdata()
            setEditform(null)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
            <Aheader/>
            <h1 className='text-center'>Blog Manager</h1>
            <div className="container">
                <MDBTable>
                    <MDBTableHead>
                        <tr className='text-center'>
                            <th>#id</th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </MDBTableHead>

                    <MDBTableBody>
                        {
                            blog && blog.map((data)=>
                                <tr className='text-center' key={data.id}>
                                    <td>{data.id}</td>
                                    <td>
                                        <img src={data.img}  style={{width:"50px"}} alt="image not found" />
                                    </td>
                                    <td>{data.date}</td>
                                    <td>{data.month}</td>
                                    <td>{data.year}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => viewdata(data.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                        <button className='btn btn-success mx-2' onClick={() => savedata(data)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => deleteData(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </MDBTableBody>
                </MDBTable>

              {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="">
                                    <div className="blog-item">
                                        <div className="position-relative overflow-hidden rounded-top">
                                            <img className="img-fluid" src={view.img} style={{ height: "250px", width: "100%" }} alt />
                                        </div>
                                        <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                                <span>{view.date}</span>
                                                <h6 className="text-primary text-uppercase mb-0">{view.month}</h6>
                                                <span>{view.year}</span>
                                            </div>
                                            <a className="h5 lh-base text-light" href>{view.desc}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {
                editform && (
                    <div className="container mt-5">
                        <h1 className='text-center'>UPDATE BLOG DATA</h1>
                        <div className="bg-light rounded h-100 p-5">
                            <form >
                                <div className="row g-3">
                                    <div className="col-6">
                                        <input type="url" name='img' onChange={getchange} value={blogedit.img} className="form-control bg-white border-0 px-4" placeholder="Your Image" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-6">
                                        <input type="date" name='date' onChange={getchange} value={blogedit.date} className="form-control bg-white border-0 px-4" placeholder="Your date" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-6">
                                        <select name='month' onChange={getchange} value={blogedit.month} className="form-select bg-white border-0 px-4" aria-label="Default select example" style={{ height: 55 }}>
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
                                        <select name='year' onChange={getchange} value={blogedit.year} className="form-select bg-white border-0 px-4" aria-label="Default select example" style={{ height: 55 }}>
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
                                        <textarea name='desc' onChange={getchange} value={blogedit.desc} className="form-control bg-white border-0 px-4 py-3" rows={4} placeholder="Enter your Descrition" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <button className="btn btn-primary w-100 py-3" onClick={handleupdate} type="submit">UPDATE BLOG</button>
                                            </div>
                                            <div className="col-6">
                                                <button className="btn btn-primary w-100 py-3" onClick={() => seteditform(null)} type="submit">CANClE</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default BlogsMan;