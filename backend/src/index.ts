import express, {Express} from "express"
import http from "http"
import { Server } from "socket.io";
import set_routes from "./routes/routes";
import * as dotenv from "dotenv"
import database from "./database/database";
import config_app from "./utils/config_app";
import socket_manager from "./sockets/socket_manager";

dotenv.config({path: "./.env"});

const port: number = Number(process.env.PORT);

const app: Express = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {origin: "*"} // allow all origins for development
})

database.connect()

config_app(app)
set_routes(app)     // sets routes
socket_manager(io)

server.listen(port, () => console.log(`app listening on http://localhost:${port}`))