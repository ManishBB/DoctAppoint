import React , {useState, useEffect} from 'react'
import "./doctorcard.css"
import axios from 'axios';
import { useLocation , useNavigate } from 'react-router-dom';



const DoctorCard = (props) => {
  let navigate = useNavigate()

  const handleBookAppointment = async (e)=>{
    try {
      navigate("/doctoravailability" , { state : props.item._id});
      
    } catch (err) {}
  }

  return (
    <div className='doctorcard'>
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">Education : {props.item.education}</p>
                <p className="card-text">Experience : {props.item.experience}</p>
                <p className="card-text">Gender : {props.item.gender}</p>
                <button type="submit" className="btn btn-primary" onClick={handleBookAppointment}>Book Appointment</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorCard