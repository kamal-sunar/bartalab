import express, { Router, Request, Response } from "express";
import database from "../database/database";
import { compare_hash } from "../utils/hash";
import interfaces from "../utils/interfaces";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const user: interfaces.user | null = await database.user.findOne({ email }).exec();

        if (user === null) {
            res.status(404).json({ message: "User not found" });
        }

        const isMatch = await compare_hash(password, (user as interfaces.user).password);

        if (!isMatch) {
            res.status(401).json({ message: "Invalid credentials" });
        } else {
            res.status(200).json({message: "success", user})
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
