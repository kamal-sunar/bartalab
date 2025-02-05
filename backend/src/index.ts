import express, {Express} from "express"
import http from "http"
import { Server } from "socket.io";
import set_routes from "./routes/routes";              // sets routes
import * as dotenv from "dotenv"
import database from "./database/database";            // database connection methods and schemas
import config_app from "./utils/config_app";           // app confugarations
import socket_manager from "./sockets/socket_manager"; // socket manager

dotenv.config({path: "./.env"});

const port: number = Number(process.env.PORT);

const app: Express = express()                         // express instance
const server = http.createServer(app)                  // server instance
const io = new Server(server, {                        // socket io instance
    cors: {origin: "*"} // allow all origins for development
})

database.connect()                                     // establish database connection

config_app(app)                                        // Configure the app
set_routes(app)                                        // sets routes
socket_manager(io)                                     // socket manager instance

server.listen(port, () => console.log(`app listening on http://localhost:${port}`))