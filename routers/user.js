const express = require("express")
const { Router } = express
const router = new Router()
const User = require("../models").user
const Scoreboard = require("../models").scoreboard
const authMiddleware = require("../auth/middleware")


router.get("/:userId", async (req, res, next) => {
    try {
        const id = parseInt(req.params.userId)
        const getUser = await User.findByPk(id, {
            include: [Scoreboard],
            order: [[Scoreboard, "score", "DESC"]],
        });
        if (!getUser) {
            res.status(404).send("User not found")
        } else {
            res.json(getUser)
        }
    } catch (e) {
        next(e)
    }
});


router.patch("/:userId", authMiddleware, async (req, res, next) => {
    try {
        const id = parseInt(req.params.userId)
        const update = await User.findByPk(id)
        if (!update) {
            res.status(404).send("User not found")
        } else {
            const updated = await update.update(req.body)
            res.json(updated);
        }
    } catch (e) {
        next(e)
    }
})


router.delete("/:userId", authMiddleware, async (req, res, next) => {
    try {
        const id = parseInt(req.params.userId)
        const userToDelete = await User.findByPk(id)
        if (!userToDelete) {
            res.status(404).send("User not found")
        } else {
            const deleted = userToDelete.destroy()
            res.json(deleted);
        }
    } catch (e) {
        next(e)
    }
});


router.post("/:userId/score", authMiddleware, async (req, res) => {
    const { score, userId } = req.body;
    if (!userId) {
        return res.status(400).send("Missing a userId")
    }

    try {
        const newScore = await Scoreboard.create({
            score,
            userId,
        });

        res.status(201).json({
            newScore,
        });
    } catch (error) {
        next(e);
    }
});

module.exports = router