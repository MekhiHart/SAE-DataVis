const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

// routes
const api =require("./src/routes/dbS3.route")

const PORT = process.env.PORT || 3002


// * Middle ware
app.use(cors()) // * allows app to set headers to http responses and requests
app.use(express.json()); // parses incoming JSON and converts it to Javascript objects

app.use("/api",api )

try{
    app.listen(PORT, () =>{
        console.log("Listening to PORT: ", PORT)
    })
    
}

catch{
    console.log("Server failed running")
}