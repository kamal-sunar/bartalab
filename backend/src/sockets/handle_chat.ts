import interfaces from "../utils/interfaces"
import database from "../database/database"
import { Server } from "socket.io"


export const handle_chat = async (message: interfaces.text, chatid: string, io: Server) => {
    const update_chat = await database.chat.findOneAndUpdate({chatid: chatid}, {$push: {texts: message}})

    if (update_chat) {
        io.to(message.receiver).emit("text", {
            message: message    
        })
    } else {
        io.to(message.sender).emit("text", {
            message: {message: "text failed", chatid: chatid}
        })
    }
}