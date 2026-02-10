import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userName: String,
    userPassword: String,
    userMobileNo: Number,
    userType: { type: String, enum: ["Doctor", "Patient"] },
    userAge: { type: Number, min: 18 },
    createdAt: { type: Date, default: new Date() },
})

export const User = mongoose.model("user", UserSchema)