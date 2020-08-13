const express = require("express")
const { Router } = express
const router = new Router()
const User = require("../models").user
const Scoreboard = require("../models").scoreboard


router.get("/", async (req, res, next) => {
    try {
        const getHighestScores = await Scoreboard.findAll({
            include: [{ model: User, attributes: ["name"] }],
            order: [["score", "DESC"]],
        });

        res.json(getHighestScores)
    } catch (e) {
        next(e)
    }
});

router.post("/", async (req, res) => {
    const { score, userId } = req.body
    console.log({ score, userId })
    if (!score || !userId) {
        return res.status(400).send("Missing an score or an userId")
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
        if (error.name === "SequelizeUniqueConstraintError") {
            return res
                .status(400)
                .send({ message: "There is an existing account with this email" })
        }

        return res.status(400).send({ message: "Something went wrong, sorry" })
    }
})

module.exports = router