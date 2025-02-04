import express, {Router, Request, Response} from "express"

const router: Router = express.Router();

router.get("/:userid/:friendid", async(req: Request, res: Response) => {
    const userid = req.params.userid;
    const friendid = req.params.friendid;
})

export default router;