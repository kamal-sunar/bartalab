import express, {Request, Response, Router} from "express"
import database from "../database/database";
import interfaces from "../utils/interfaces";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const { requester_id, requested_id, requester_name, requested_name } = req.body;

    const friend_request: interfaces.friend_requests = {from: {name: requester_name, id: requester_id}, to: {name: requested_name, id: requested_id}, accepted: false}

    try {
        const update_requested = await database.user.findOneAndUpdate({_id: requested_id}, {$push: {requests: [friend_request]}}).exec(); // update the requests array in requested size

        if (update_requested !== null) {
            const update_requester = await database.user.findOneAndUpdate({_id: requester_id}, {$push: {requests: friend_request}}).exec(); // update the requests array in requester size
            if (update_requester !== null) {
                res.status(200).json({message: "success", update_requester})
            } else {
                await database.user.findOneAndUpdate({_id: requested_id}, {$pop: {requests: 1}}) // remove the last requests from requests if it fails to update in the requester side
                res.status(500).json({message: "Failed to send request please try again"})
            }
        } else {
            res.status(500).json({message: "Internal server error"})
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Internal server error"})
    }
})

export default router;