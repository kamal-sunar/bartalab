import express, {Express} from "express"
import set_routes from "./routes/routes";
import * as dotenv from "dotenv"
import database from "./database/database";
import config_app from "./utils/config_app";

dotenv.config({path: "./.env"});

const app: Express = express()
const port: number = Number(process.env.PORT);

database.connect()
config_app(app)
set_routes(app)     // sets routes

app.listen(port, () => console.log(`app listening on http://localhost:${port}`))