const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://<manish>:<manish>@cluster0.r9xby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectToMongo = async () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully!")
    })
}

module.exports = connectToMongo;