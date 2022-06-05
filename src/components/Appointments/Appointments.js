import React , { useEffect, useState } from 'react'
import "./appointments.css"
import axios from 'axios'
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import { Link } from 'react-router-dom';

function Appointments() {

    const [requests, setRequests] = useState([
      {
        appointmentDate: "0110-12-31T18:06:32.000Z",
        userAge: 22,
        userEmail: "mbb7224@gmail.com",
        userName: "Manish Bhamare",
        userNumber: 7218196581,
        __v: 0,
        _id: "626af6286622fd659d28f52a"
      }
    ])

    useEffect(() => {
      // Update the document title using the browser API
      const handleBookSlot = async () =>{

        try {
          await axios.get("http://localhost:8800/api/doctors/viewrequests" ).then(
            res => {
              console.log(res);
              console.log(res.data);
              setRequests(res.data)
              console.log(requests)
            })
          } catch (err) {}
          
      }
      
      handleBookSlot();
    }, []);
  

  return (
    <div className="appointments" >
        <h3>Appointments</h3>
      
        {
          requests.map((item, index) => {
            return <AppointmentCard index={index} item={item} />
          })
        } 

        <Link to="/addavailability"><button type="button" class="btn btn-primary">Add Availability</button></Link>
    </div>
  )
}

export default Appointments