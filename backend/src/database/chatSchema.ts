import mongoose, {Schema} from "mongoose";
import interfaces from "../utils/interfaces";

const chatSchema: Schema = new Schema({
    texts: {
        value   :{type: String,  required: true}, 
        date    :{type: String,  required: true}, 
        sender  :{type: String,  required: true}, 
        receiver:{type: String,  required: true},
        read    :{type: Boolean, required: true},
    },
    chatid: {type: String, required: true}
})

export default mongoose.model<interfaces.chat_document>("Chat", chatSchema);