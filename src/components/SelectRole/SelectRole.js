import React, { useState } from 'react'
import "./selectrole.css"
import { useNavigate } from 'react-router-dom';

function SelectRole() {

  const [role, setRole] = useState('')
  let navigate = useNavigate();

  function handleSubmitRole(){
    if(role === 'doctor'){
      navigate('/doctordetails')
    }
    else if(role === 'patient')
    navigate('/userdetails')
  }


  return (
    <div className='selectrole'>
      <form onSubmit={(e) => { e.preventDefault() }}>
            <div className="title">
              Select a Role
            </div>
            <select className="form-select selectdrop" aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
                <option defaultValue={null}>Select Role</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
            </select>
            <button className="btn btn-primary" onClick={handleSubmitRole}>Next</button>
        </form>
    </div>
  )
}

export default SelectRole