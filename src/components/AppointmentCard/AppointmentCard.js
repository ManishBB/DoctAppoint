import React , {useState, useEffect} from 'react'
import "./appointmentcard.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppointmentCard = (props) => {

    const handleAppointmentAccept = async (e)=>{
      try {
        const dateandtime = `Date:${props.item.appointmentDate[0].substring(0, 10)}  Time : ${props.item.appointmentDate[0].substring(11, 19)} To ${props.item.appointmentDate[1].substring(11, 19)}`
        const message = "Your request is accepted on DoctAppoint, Please do visit clinic on " + dateandtime
        const mobilenumber = `+91${props.item.userNumber}`
        await axios.post("http://localhost:8800/api/doctors/sendsms", {message, mobilenumber}).then(
          res => {
            console.log(res);
            console.log(res.data);
          })
        await axios.delete("http://localhost:8800/api/doctors/" + props.item._id , ).then(
          res => {
            console.log(res);
            console.log(res.data);
          })
        } catch (err) {}   
    }
    

    const handleAppointmentReject = async (e)=>{
      try {
        var message = "Your request is Rejected on DoctAppoint, please rescedule another request."
        var mobilenumber = `+91${props.item.userNumber}`
        await axios.post("http://localhost:8800/api/doctors/sendsms", {message, mobilenumber}).then(
            res => {
              console.log(res);
              console.log(res.data);
            })
        console.log(message, mobilenumber)
        await axios.delete("http://localhost:8800/api/doctors/" + props.item._id ).then(
          res => {
            console.log(res);
            console.log(res.data);
          })
          
        } catch (err) {}    
    }


  return (
    <div className='appointmentcard'>
        <div>{props.item.userName}</div>
        <div>{props.item.userNumber}</div>
        <div>{props.item.userAge}</div>
        <div>{props.item.userGender}</div>
        <div>Date:{props.item.appointmentDate[0].substring(0, 10)}  Time : {props.item.appointmentDate[0].substring(11, 19)} To {props.item.appointmentDate[1].substring(11, 19)}</div>
        <div><button type="submit" className="btn btn-primary" onClick={handleAppointmentAccept} value={props.item.id}>Accept</button></div>
        <div><button type="submit" className="btn btn-danger" onClick={handleAppointmentReject}>Reject</button></div>
    </div>
  )
}

export default AppointmentCard