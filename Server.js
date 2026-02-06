import express from "express"

//initialize the server
//create a server
const Server = express()


Server.get("/", (req, res) => {
    res.send("Hello...")
})

Server.get("/:name/:age",(req,res)=>{
    res.send(`Welcome ${req.params.name}`)
})

Server.listen(5000, () => {
    console.log("Server Started..!")
})