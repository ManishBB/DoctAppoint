import React, { useState } from 'react'
import "./bookappointment.css"
import { useLocation, useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

function BookAppointment() {

  const location = useLocation()
  const navigate = useNavigate()

  const [email, setEmail] = useState(location.state.email)
  const [mobilenumber, setMobilenumber] = useState(location.state.mobilenumber)
  const [name, setName] = useState(location.state.name)
  const [age, setAge] = useState(location.state.age)
  const [gender, setGender] = useState(location.state.gender)
  const [startDate, setStartDate] = useState(location.state.date);

  console.log(location.date) 

  const handleBookSlot = async (e)=>{
    try {
      await axios.post("http://localhost:8800/api/users/appointmentbooking", {
        "userName" : name,
        "userEmail" : email,
        "userNumber" : mobilenumber,
        "userAge" : age,
        "userGender" : gender,
        "appointmentDate" : startDate,
      }
).then(
        res => {
        console.log(res);
        console.log(res.data);
      })
      navigate("/login");
    } catch (err) {}
  }

  return (
    <div className="bookappointment">
        <form onSubmit={(e) => { e.preventDefault() }}>
        <div className="title">
              Book an Appointment
            </div>
            <h5>Doctor Booking Date is {location.state.date}</h5>
            <button className="btn btn-primary" onClick={handleBookSlot}>Book an Appointment</button>
        </form>
    </div>
  )
}

export default BookAppointment