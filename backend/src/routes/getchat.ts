import express, {Router, Request, Response} from "express"
import database from "../database/database";

const router: Router = express.Router();

router.get("/:chatid", async(req: Request, res: Response) => {
    const chatid: string = req.params.chatid;

    try {
        if (chatid) {
            const chat = await database.chat.findOne({chatid: chatid}).exec();
    
            if (!chat) {
                res.status(404).json({message: "Not found"})
            } else {
                res.status(200).json({message: "success", chat})
            }
        } else {
            res.status(400).json({message: "provide a chatid"})
        }
    } catch (error) {
        console.error("Internal server error", error);
        res.status(500).json({message: "Internal server error"})
    }
})

export default router;