import {Socket, Server} from "socket.io"
import interfaces from "../utils/interfaces";

import { response_request } from "./response_request";
import { handle_chat } from "./handle_chat";
import { read_text } from "./read_text";


export default (io: Server) => {
    io.on("connection", (socket: Socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("text", async (message: interfaces.text, chatid: string) => {
            handle_chat(message, chatid, io)
        })

        socket.on("respond_request", async (response: interfaces.friend_requests) => {
            response_request(response, io)
        })

        socket.on("read", async (message: interfaces.text, chatid: string) => {
            read_text(io, message, chatid)
        })
    })
}