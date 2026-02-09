import {
    createUser,
    deleteUser,
    fetchAllUsers,
    updateUser
} from "../controllers/UserController.js";

import express from "express"

const router = express.Router()

router.get("/fetchusers", fetchAllUsers)
router.post("/createuser", createUser)
router.delete("/deleteuser", deleteUser)
router.put("/updateuser", updateUser)

export default router

