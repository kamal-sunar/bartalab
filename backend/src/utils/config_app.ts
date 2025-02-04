import cors, { CorsOptions } from "cors"
import express, { Express, urlencoded } from "express"
import morgan from "morgan"

const config_app = (app: Express): void => {
    const cors_opt: CorsOptions = {
        optionsSuccessStatus: 200,
        origin: "http://localhost:5173", // change it later
        credentials: true
    }

    app.use(cors(cors_opt))
    app.use(express.json())
    app.use(morgan('tiny'))
    app.use(express.urlencoded({ extended: true }))
}

export default config_app