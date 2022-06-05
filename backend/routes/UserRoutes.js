const express = require('express');
const User = require('../models/User');
const Slot = require('../models/Slot');
const Availability = require('../models/Availability');
const Doctor = require('../models/Doctor');

const router = express.Router();

router.post("/register", async (req,res) => {
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        mobilenumber:req.body.mobilenumber,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender,
    })

    try{
        const user = await newUser.save();
        res.status(201).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Login
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({ email: req.body.email})
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

router.post("/appointmentbooking", async (req,res)=>{
    const newSlot = new Slot({
        userName : req.body.userName,
        userEmail : req.body.userEmail,
        userNumber : req.body.userNumber,
        userAge : req.body.userAge,
        appointmentDate : req.body.appointmentDate
    })

    try{
        const slot = await newSlot.save();
        res.status(201).json(slot)
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get("/viewavailability", async (req,res)=>{
    try{
        var criteria = { $or: [{doctorID: '62619082db191327ddd10430'}]}

        Availability.find(criteria, function(err, foundslots){
            res.status(200).json(foundslots)
        });
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get("/doctorslist", async (req,res)=>{
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
      } catch (err) {
        res.status(500).json(err);
      }
})


module.exports = router