import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./availabilitycard.css"

const AvailabilityCard = (props) => {

  let navigate = useNavigate()

  console.log(props.item.dateAvailable)
  console.log(props.item.userData)

  props.userData.date = props.item.dateAvailable
  const handleBookAppointment = async (e)=>{
    navigate("/bookappointment" , {state : props.userData}) 
  }

  console.log(props.userData)
  return (
    <div className='availabilitycard' style={{padding: '10px'}}>
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Date:{props.item.dateAvailable[0].substring(0, 10)}  Time : {props.item.dateAvailable[0].substring(11, 19)}</h5>
                <br/>To<br/>
                <h5 className="card-title">Date:{props.item.dateAvailable[1].substring(0, 10)}  Time : {props.item.dateAvailable[1].substring(11, 19)}</h5>
                <button className="btn btn-primary" onClick={handleBookAppointment}>Book Now</button>                
            </div>
            </div>
        </div>
    </div>
  )
}

export default AvailabilityCard