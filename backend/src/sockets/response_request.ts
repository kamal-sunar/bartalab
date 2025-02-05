import interfaces from "../utils/interfaces"
import database from "../database/database"
import { Server } from "socket.io"

export const response_request = async (response: interfaces.friend_requests, io: Server) => {
    if (response.accepted) {
        const update_requests = await database.user.updateMany(
            { _id: { $in: [response.from.id, response.to.id] } }, // Match both users
            [
                {
                    $set: {
                        friends: {
                            $concatArrays: [
                                "$friends",
                                [
                                    {
                                        $cond: {
                                            if: { $eq: ["$_id", response.from.id] },
                                            then: response.to, // Add response.to to response.from's friends
                                            else: response.from // Add response.from to response.to's friends
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                },
                {
                    $pull: { requests: response } // Remove request from both users
                }
            ]
        );

        if (update_requests) {
            io.to(response.from.id).emit("notification", {
                message: `${response.to.name} accepeted your friend request`
            })
            io.to(response.to.id).emit("notification", {
                message: `You and ${response.from.name} are now friends`
            })
        } else {
            io.to(response.to.id).emit("notification", {
                message: "failed"
            })
        }
    } else {
        const update_requests = await database.user.updateMany(
            { _id: { $in: [response.from.id, response.to.id] } }, // Match both users
            [
                {
                    $pull: { requests: response } // Remove request from both users
                }
            ]
        );

        if (update_requests) {
            io.to(response.to.id).emit("notification", {
                message: "failed to reject request"
            })
        }
    }
}