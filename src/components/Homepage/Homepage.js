import React from 'react'
import "./Homepage.css"
import { Link } from 'react-router-dom';


const Homepage = () => {


  return (
    <div className="homepage">
        <div className="headings">
            <h2>We are DoctAppoint!</h2>
            <p>We are here to keep you healthy & consult you anytime, anywhere....</p>
        </div>
        <div className="buttonBox">
        <Link to="/login"><button type="button" className="btn btn-primary">Book an Appointment</button></Link>
        </div>
    </div>
  )
}

export default Homepage