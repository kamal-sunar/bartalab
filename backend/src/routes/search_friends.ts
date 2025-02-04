import express, {Request, Response, Router} from "express"
import database from "../database/database";

const router: Router = express.Router();

router.get("/:email", async(req: Request, res: Response) => {
    const email: string | null = req.params.email;

    if (email !== null) {
        try {
            const result = await database.user.findOne({email}, '_id name email').exec();

            if (result) {
                res.status(200).json({message: 'success', result});
            } else {
                res.status(404).json({message: "No user found"});
            }
        } catch (error) {
            console.error("Error searching", error);
            res.status(500).json({message: "Internal server error"});
        }
    }
})

export default router;