import axios from "axios";
import React, { useState } from "react";



function Bookingmodel() {

    const[formvalue,Setformvalue] = useState({
        name : "",
        email : "",
        phoneno : "",
        service : "",
        address : ""
    })

    const changeHandle = (e) => {
        Setformvalue({...formvalue,id: new Date().getTime().toString(),[e.target.name]:e.target.value})
    }

    const submitHandle = async(e) =>{
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/booking`,formvalue)
        Setformvalue({...formvalue,name: "" ,email : "",phoneno : "",service : "",address : ""})
        alert('booking succesfully');
        return false;
    }


  return (
    <>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow">

            {/* Header */}
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">Book Your Service</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            {/* Body */}
            <div className="modal-body">

              <form onSubmit={submitHandle}>

                <div className="mb-3">
                  <label>Name :</label>
                  <input type="name" className="form-control" onChange={changeHandle} placeholder="Enter name" name="name" />
                </div>

                <div className="mb-3">
                  <label>Email:</label>
                  <input type="email" className="form-control" onChange={changeHandle} placeholder="Enter email" name="email" />
                </div>

                <div className="mb-3">
                  <label>Phoneno:</label>
                  <input type="text" className="form-control" onChange={changeHandle} placeholder="Enter phone no" name="phoneno" />
                </div>

                <div className="mb-3">
                  <label>Service :</label>
                  <textarea className="form-control" onChange={changeHandle} placeholder="write which service you want" name="service"></textarea>
                </div>

                <div className="mb-3">
                  <label>Date :</label>
                  <input type="date" className="form-control" onChange={changeHandle} placeholder="Enter date" name="date" />
                </div>

                <div className="mb-3">
                  <label>Time :</label>
                  <input type="time" className="form-control" onChange={changeHandle} placeholder="Enter time" name="time" />
                </div>

                <div className="mb-3">
                  <label>Address :</label>
                  <textarea className="form-control" onChange={changeHandle} placeholder="write address" name="address"></textarea>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end gap-2 mt-4">
                  <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                    Close
                  </button>

                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                    Submit
                  </button>
                </div>

              </form>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Bookingmodel;