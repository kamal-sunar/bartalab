import { Server } from "socket.io";
import interfaces from "../utils/interfaces";
import database from "../database/database";


// Checks the text wheather or not a chat is read or not
export const read_text = async (io: Server, text: interfaces.text, chatid: string) => {
    // finds the chat document
    const chat = await database.chat.findOne({ chatid: chatid });

    if (!chat) { // if chat is not found do nothing
        console.log("Chat not found");
        return;
    }

    let updated = false; // intialize the updated to false

    /*
        Start checking the texts from reverse (reverse iterate) and update
    */
    for (let i = chat.texts.length - 1; i >= 0; i--) {
        if (!chat.texts[i].read) { // if there are texts to be updated to read the do it
            chat.texts[i].read = true;
            updated = true;
        } else { // if first read message is reached break out of the loop
            break; // Stop when a read=true message is found
        }
    }

    if (updated) { // if update is complete then update the database
        const update_database = await database.chat.updateOne({ chatid: chatid }, { $set: { texts: chat.texts } });
        if (update_database) { // if database update is done then only notify the sender
            io.to(text.sender).emit("text", {
                message: {read: true, chatid: chatid}
            })
        } else { // if database update fails then notify this to receiver
            io.to(text.receiver).emit("text", {
                message: "failed to update the read",
                text: text
            })
        }
    } else {
        io.to(text.receiver).emit("text", {
            message: "failed to update the read",
            text: text
        })
    }
}