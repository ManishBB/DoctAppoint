import React , { useState } from 'react'
import "./loginform.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()

    const handleLogin = async (e)=>{
      try {
        await axios.post("http://localhost:8800/api/users/login", {
          "email" : email,
          "password" : password,
      } ).then(
          res => {
          console.log(res);
          console.log(res.data);
          navigate("/doctoravailability" , {state:res.data});
        })
        
      } catch (err) {}
    }

  return (
      <>
    <div className="loginform">
        <form onSubmit={(e) => { e.preventDefault() }}>
        <div className="title">
              LogIn
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
            <Link to="/doctorlogin"><button type="submit" className="btn btn-secondary" >Doctor Login</button></Link>
            <Link to="/usersignup"><button type="submit" className="btn btn-secondary" >Create Account</button></Link>
        </form>
    </div>
    </>
  )
}

export default LoginForm