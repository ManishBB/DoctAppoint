import React , { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import "./doctorlogin.css"
import axios from 'axios';


const DoctorLogin = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()

    const handleLogin = async (e)=>{
      try {
        await axios.post("http://localhost:8800/api/doctors/login", { email , password} ).then(
          res => {
          navigate("/appointments" , {state:res.data});
        })
        
      } catch (err) {}
    }
    return (
        <>
      <div className="doctorlogin">
          <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="title">
                Doctor LogIn
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={e => setEmail(e.target.value)}/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" onInput={e => setPassword(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
          </form>
      </div>
      </>
    )
}

export default DoctorLogin