import interfaces from "../utils/interfaces"
import database from "../database/database"
import { Server } from "socket.io"

/*
    Handles the messaging
*/

export const handle_chat = async (message: interfaces.text, chatid: string, io: Server) => {
    const update_chat = await database.chat.findOneAndUpdate({chatid: chatid}, {$push: {texts: message}})       // update chat document in database

    // if chat document is updated then send the text recepient
    if (update_chat) {
        io.to(message.receiver).emit("text", {
            message: message    
        })

        // notify the sender that message is delivered
        io.to(message.sender).emit("text", {
            message:  `message sent to ${message.receiver}`
        })
    } else { // if updating the chat document fails then notify the sender that it failed
        io.to(message.sender).emit("text", {
            message: {message: "text failed", chatid: chatid}
        })
    }
}