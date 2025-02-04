import express, {Router, Request, Response} from "express";
import interfaces from "../utils/interfaces";
import database from "../database/database";
import { create_hash } from "../utils/hash";

const router: Router = express.Router();

router.post("/", async(req: Request, res: Response) => {
    let userDetails: interfaces.user = req.body;

    if (userDetails.name.trim() !== "" && userDetails.email !== "" && userDetails.birthdate && userDetails.gender) {
        try {
            const user_count = await database.user.countDocuments({email: userDetails.email}).exec();

            if (user_count === 0) {
                userDetails.password = await create_hash(userDetails.password)
                await new database.user({
                    ...userDetails,
                    password: userDetails.password
                })
                    .save();

                res.status(200).json({message: "success"});
            } else if (user_count > 0) {
                res.status(400).json({message: "Email already taken"});
            }
        } catch (error) {
            console.error("Error saving the user" ,error);
            res.status(404).json({message: "Internal server error"});
        }
    } else {
        res.status(400).json({message: "Bad request"});
    }
})

export default router;