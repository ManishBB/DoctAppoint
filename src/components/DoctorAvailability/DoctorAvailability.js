import React , { useState, useEffect } from 'react'
import AvailabilityCard from '../AvailabilityCard/AvailabilityCard'
import "./doctoravailability.css"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DoctorAvailability = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const [availableDates , setAvailableDates] = useState([
    {
        "_id": "626c66e8f3602db1bd42d2cc",
        "dateAvailable": "2022-06-01T22:29:55.000Z",
        "__v": 0
    },
  ]);

  const uid = location.state

  useEffect(() => {
    const getDates = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/users/viewavailability" )
        console.log(res)
        setAvailableDates(res.data)
        console.log(location.state)
      } catch (err) {
        console.log(err);
      }
    };
    getDates();
  }, []);

  return (
    <div className='doctoravailability'>
        <h4 style={{textAlign : 'center'}}>Dr. Sujoy Ghosh</h4>


        {
          availableDates.map((item, index) => {

            return <AvailabilityCard index={index} item={item} userData={location.state}/>
          })
        }
        

    </div>
  )
}

export default DoctorAvailability