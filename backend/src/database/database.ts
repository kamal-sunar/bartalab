import mongoose, {ConnectOptions} from "mongoose"
import userSchema from "./userSchema";
import chatSchema from "./chatSchema";

namespace database {
    export const connect = async () => {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }
        try {
            await mongoose.connect(mongoURI);
            console.log("Database connected");
        } catch (error) {
            console.error("MongoDB connection error:", error);
        }
    
    }

    export const user = userSchema;
    export const chat = chatSchema;
}

export default database;