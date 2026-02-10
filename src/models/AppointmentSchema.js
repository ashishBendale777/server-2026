import mongoose from "mongoose";

let AppointmentSchema = mongoose.Schema({
    bookingDate: { type: Date, default: new Date() },
    appointmentDate: { type: Date },
    appontMentStatus: { type: String, enum: ["Pending", "Apptoved", "Cancel"], default: "Pending" },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
})