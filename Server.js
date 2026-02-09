import express from "express"
import { ConnectDB } from "./src/config/DBConfig.js"
import router from "./src/routes/UserRoutes.js"
import bodyParser from "body-parser"

//initialize the server
//create a server
const Server = express()

Server.use(bodyParser.json())

ConnectDB()

Server.get("/", (req, res) => {
    res.send("Hello...")
})

Server.use("/api", router)

Server.listen(5000, () => {
    console.log("Server Started..!")
})