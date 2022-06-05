import React, { useState } from 'react'
import "./doctorregister.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DoctorRegister = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [experience, setExperience] = useState('')
    const [education, setEducation] = useState('')
    const [gender, setGender] = useState('')

    let navigate = useNavigate()

    const handleSignUp = async (e)=>{
      try {
        await axios.post("http://localhost:8800/api/doctors/register", { name, email, password , experience, education, gender} ).then(
            res => {
            console.log(res);
            console.log(res.data);
          })
        navigate("/appointments");
      } catch (err) {}
    }

  return (
    <div className='doctorregister'>
        <form onSubmit={(e) => { e.preventDefault() }}>
            <div className="title">
              SignUp
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" onInput={e => setEmail(e.target.value)}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="passInput" onInput={e => setPassword(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Your Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={e => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Your Experience</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={e => setExperience(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Your Education</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={e => setEducation(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Your Gender</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={e => setGender(e.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={handleSignUp}>Create Account</button>
        </form>
    </div>
  )
}

export default DoctorRegister