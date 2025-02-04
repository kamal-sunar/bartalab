import {Express} from "express"
import getchat from "./getchat"
import singup from "./signup"
import login from "./login"
import search_fiends from "./search_friends"

const set_routes = async (app: Express) => {
    app.use("/getchat", getchat); // work in progress
    app.use("/signup", singup);   // untested
    app.use("/login", login)
    app.use("/search_friends", search_fiends)
}

export default set_routes;