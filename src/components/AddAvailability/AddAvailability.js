import React , {useState} from 'react'
import "./addavailability.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";

const AddAvailability = () => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate()

    const handleAddAvailability = async (e)=>{
      try {
        await axios.post("http://localhost:8800/api/doctors/addavailability", {
          "dateAvailable" : [
            startDate , endDate
          ]
      }).then(
          res => {
          console.log(res);
          console.log(res.data);
        })
        navigate("/appointments");
      } catch (err) {}
    }

  return (
    <div className='addav'>
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} showTimeSelect dateFormat="Pp" />
        <br/>
        To
        <br />
        <DatePicker selected={endDate} onChange={(date:Date) => setEndDate(date)} showTimeSelect dateFormat="Pp"/>

        <button type="submit" className="btn btn-primary" onClick={handleAddAvailability}>Add Availability</button>
    </div>
  )
}

export default AddAvailability