import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userName: String,
    userPassword: String,
    userMobileNo: Number
})

export const User = mongoose.model("user",UserSchema)