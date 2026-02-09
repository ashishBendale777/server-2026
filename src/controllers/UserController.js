import { User } from "../models/UserSchema.js"


let createUser = async (req, res) => {
    let body = req.body
    let response = await User.create(body)
    res.status(200).json({
        message: "User Created",
        data: response,
        success: true
    })
}

let fetchAllUsers = async(req, res) => {
    let result = await User.find()
    res.status(200).json({
        message: "All user.!",
        data: result,
        success: true
    })

}

let updateUser = async (req, res) => {
    let body = req.body
    let result = await User.updateOne({ _id: body.userid },
        { userPassword: body.userPassword })
    
    res.status(200).json({
        message: "User Updated.!",
        data: result,
        success: true
    })
}


let deleteUser = async (req, res) => {
    let body = req.body
    let result = await User.deleteOne({ _id: body.userid })
    res.status(200).json({
        message: "User Deleted.!",
        data: result,
        success: true
    })
}

export { createUser, fetchAllUsers, updateUser, deleteUser }