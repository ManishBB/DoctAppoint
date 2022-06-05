const express = require('express');
const Doctor = require('../models/Doctor');
const User = require('../models/User');
const Availability = require('../models/Availability');
const Appointment = require('../models/Slot');
const router = express.Router();

// Find your Service Plan ID and API Token at dashboard.sinch.com/sms/api/rest
// Find your Sinch numbers at dashboard.sinch.com/numbers/your-numbers/numbers

// const SERVICE_PLAN_ID = '5bd015d306204ea8b0e8c5d774bf9faf';
// const API_TOKEN = '752541b398194ad7be67db94a41c5e83';
// const SINCH_NUMBER = '+447520651525';

const SERVICE_PLAN_ID = '34370ded07254c11ba2f5a7ff82e1649';
const API_TOKEN = 'bdf3283294ce4c599daa7cc6db28bb3a';
const SINCH_NUMBER = '+447520651744';

const fetch = require('node-fetch')


router.post("/register", async (req,res) => {
    const newUser = new Doctor({
        name:req.body.name,
        email:req.body.email,
        password: req.body.password,
        experience: req.body.experience,
        education: req.body.education,
        gender: req.body.gender ,
    })

    try{
        const user = await newUser.save();
        console.log(user._id)
        res.status(201).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Login
router.post("/login", async (req,res)=>{
    try{
        const user = await Doctor.findOne({ email: req.body.email})
        !user && res.status(401).json("Wrong Username or Password!")

        var originalPassword = user.password;

        originalPassword !== req.body.password && res.status(401).json("Wrong Username or Password!")

        const {password, ...info} = user._doc

        res.status(200).json({...info})
    }
    catch(err){
        res.status(500).json(err)
    }
})


router.post("/addavailability" , async (req, res) => {
    const newAppointment = new Availability({
        dateAvailable : req.body.dateAvailable,
    })

    try{
        const newAvailed = await newAppointment.save();
        res.status(201).json(newAvailed)
    }
    catch(err){
        res.status(500).json(err)
    }
  });

  router.get("/getuser" , async (req, res) => {
    try{
        const user = await User.findById({ uid : req.body.userid })
        const {password, ...info} = user._doc
        res.status(200).json({...info})
    }
    catch(err){
        res.status(500).json(err)
    }


});


  router.get("/viewrequests", async (req,res)=>{
    try{
        var criteria = { $or: [{doctorID: '62619082db191327ddd10430'}]}

        Appointment.find(criteria, function(err, foundslots){
            res.status(200).json(foundslots)
        });
    }
    catch(err){
        res.status(500).json(err)
    }
})

// router.delete("/deleterequest", async (req,res)=>{
//     try {
//         await Appointment.findByIdAndDelete(req.body.docid);
//         res.status(200).json("User has been deleted...");
//       } catch (err) {
//         res.status(500).json(err);
//       }
// })

router.delete("/:id", async (req,res)=>{
    try {
        
        await Appointment.findByIdAndDelete(req.params.id);
      } catch (err) {
        res.status(500).json(err);
      }
})

router.post("/sendsms", async(req, res) => {
    const mobilenumber = req.body.mobilenumber
    const message = req.body.message
    try{
        const resp = await fetch(
            'https://us.sms.api.sinch.com/xms/v1/' + SERVICE_PLAN_ID + '/batches',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + API_TOKEN
              },
              body: JSON.stringify({
                from: SINCH_NUMBER,
                to: [mobilenumber],
                body: req.body.message
              })
            }
          );
          res.send(200)
    } catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router