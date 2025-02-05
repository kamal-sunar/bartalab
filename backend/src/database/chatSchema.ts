import mongoose, {Schema} from "mongoose";
import interfaces from "../utils/interfaces";

// chat schama is collection of chats between two friends

const chatSchema: Schema = new Schema({
    // array of chat messages
    texts: [{
        value   :{type: String,  required: true},
        date    :{type: String,  required: true}, 
        sender  :{type: String,  required: true}, 
        receiver:{type: String,  required: true},
        read    :{type: Boolean, required: true},
    }],
    chatid: {type: String, required: true}
})

export default mongoose.model<interfaces.chat_document>("Chat", chatSchema);