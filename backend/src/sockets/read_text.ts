import { Server } from "socket.io";
import interfaces from "../utils/interfaces";
import database from "../database/database";


export const read_text = async (io: Server, text: interfaces.text, chatid: string) => {
    const chat = await database.chat.findOne({ chatid: chatid });

    if (!chat) {
        console.log("Chat not found");
        return;
    }

    let updated = false;
    for (let i = chat.texts.length - 1; i >= 0; i--) {
        if (!chat.texts[i].read) {
            chat.texts[i].read = true;
            updated = true;
        } else {
            break; // Stop when a read=true message is found
        }
    }

    if (updated) {
        await database.chat.updateOne({ chatid: chatid }, { $set: { texts: chat.texts } });
        io.to(text.sender).emit("text", {
            message: {read: true, chatid: chatid}
        })
    }
}