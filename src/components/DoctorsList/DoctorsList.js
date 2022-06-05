import React, { useState , useEffect } from 'react'
import DoctorCard from '../DoctorCard/DoctorCard'
import "./doctorslist.css"
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const DoctorsList = () => {

  let location = useLocation();
  const [doctorsList, setDoctorsList] = useState([]);


  useEffect(() => {
    const getDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/users/doctorslist")
        setDoctorsList(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getDoctors();
  }, []);

  return (
    <div className='doctorslist'>
        {
          doctorsList.map((item) => {
            return <DoctorCard item={item} />
          })
        }
    </div>
  )
}

export default DoctorsList