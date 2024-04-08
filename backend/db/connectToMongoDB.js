import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connecting to MongoDB");
    } catch (error) {
        console.log("ERROR connecting to Mongo DB", error.message);
    }
}
export default connectToMongoDB;