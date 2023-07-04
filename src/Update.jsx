import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


const Appointment = () => {
    const [patientAppointment, setPatientAppointment] = useState({
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        phone: "",
        dob: "",
        streetaddress1: "",
        streetaddress2: "",
        city: "",
        postal: "",
        country: "",
        appointment: "",
    });

    const handleInput = (event) => {
        const {name, value} = event.target;
           setPatientAppointment({...patientAppointment, [name]:value});
        }

        // const Navigate = useNavigate();
         const onSubmit =(event) => {
          event.preventDefault();
            alert("Record Submitted ");
        };
    return (
        <>
            <div className="container">
                <h4 className="text text-center text-success mt-2">Update Doctor Appointment Form</h4>
                  <form action="#" onSubmit={onSubmit}>
                    <div className="row mt-4"> 

                    <div className="col-sm-12 col-lg-6 mt-2">
                            <input type="text" className="form-control" name="firstname" placeholder="First name" value={patientAppointment.firstname} onChange={handleInput} />
                        </div>

                        <div className="col-sm-12 col-lg-6 mt-2">
                            <input type="text" className="form-control" name="lastname" placeholder="Last name" value={patientAppointment.lastname} onChange={handleInput} />
                        </div>

                        <div className="col-lg-6 col-sm-12 mt-2">
                            <input type="text" className="form-control" name="email"
                                placeholder="Email" value={patientAppointment.email} onChange={handleInput}
         />
                        </div>
   
                        <div className="col-sm-12 col-lg-6 mt-2">
                            <input type="radio"  value="Male" name="gender" onChange={handleInput}/>Male<br />
                            <input type="radio"  value="Female"  name="gender" onChange={handleInput}/>Female
                        </div>

                        <div className="col-lg-6 mt-2">
                            <input type="text" className="form-control" name="phone" placeholder="Phone Mo." value={patientAppointment.phone} onChange={handleInput} />
                        </div>

                        <div className="col-sm-6 col-lg-6 mt-2">
                            <input type="date" className="form-control" name="dob" value={patientAppointment.dob} onChange={handleInput} />
                        </div>

                        <div className="col-lg-6 mt-2">
                            <input type="text" className="form-control" name="streetaddress1" placeholder="Street Address" value={patientAppointment.streetaddress1} onChange={handleInput} />
                        </div>

                        <div className="col-lg-6 mt-2">
                            <input type="text" 
                                className="form-control"          
                                name="streetaddress2"
                                placeholder="Street Address Line 2"
                                value={patientAppointment.streetaddress2} 
                                onChange={handleInput} />
                        </div> 
                    
                        

                        <div className="col-lg-6 mt-2">
                            <input type="text" className="form-control" name="city"
                                placeholder="City"
                                value={patientAppointment.city} 
                                onChange={handleInput}
                            />
                        </div>

                        <div className="col-lg-6 mt-2">
                            <input type="text" className="form-control" name="postal" placeholder="Postal /Zip Code" value={patientAppointment.postal} onChange={handleInput} />
                        </div>

                        <div className="col-lg-6 mt-2">
                            <input type="text" className="form-control" name="country" placeholder="country" value={patientAppointment.country} onChange={handleInput} />
                        </div>

                <div className="form-group col-lg-6 mt-2">
                 <select  className="form-control" value={patientAppointment.appointment} onChange={handleInput}>
                             <option>--Select--</option>
                              <option>Cervix Checkup</option>
                              <option>Heart Checkup</option>
                              <option>Eye Checkup</option>
                              <option>Hearing Test</option>
                            </select>   
                        </div>
                     
                        <div className="col-sm-8 ">
                            <input type="submit" value="Submit" className="btn btn-outline-success mt-4" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Appointment;