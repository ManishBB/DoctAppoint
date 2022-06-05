const express = require("express")
const app = express()
var cors = require('cors')
const mongoose = require("mongoose")
const doctorRoute = require("./routes/DoctorRoutes")
const userRoute = require("./routes/UserRoutes")

mongoose
  .connect("mongodb+srv://manish:manish@cluster0.r9xby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  }); 

app.use(cors())
app.use(express.json())


app.use("/api/doctors", doctorRoute)
app.use("/api/users", userRoute)

app.listen(8800, ()=>{
    console.log("Backend server is running")
})