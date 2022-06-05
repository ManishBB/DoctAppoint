import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./chooserole.css"


const ChooseRole = () => {

    let navigate = useNavigate();

    function handleUser(){
        navigate('/usersignup')
    }

    function handleDoctor(){
        navigate('/doctorsignup')
    }
  return (
    <div className='chooserole'>
        <h3>Choose Your Role</h3>
        <div className='buttonsDiv'>
            <Link to="/usersignup"><button type="button" className="btn btn-primary" onClick={handleUser}>I'm a USER</button></Link>
            <Link to="/doctorsignup"><button type="button" className="btn btn-primary" onClick={handleDoctor}>I'm a DOCTOR</button></Link>
        </div>
    </div>
  )
}

export default ChooseRole