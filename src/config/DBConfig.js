import mongoose from "mongoose";
let BASE_URL = "mongodb://localhost:27017/employee-db"

const ConnectDB = async () => {
    const connection = await mongoose.connect(
        BASE_URL
    );
    console.log("DB Coneected:", connection.connection.name);
}

export { ConnectDB }
