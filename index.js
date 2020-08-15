const express = require("express")
const authMiddleware = require("./auth/middleware");
const loggerMiddleWare = require("morgan")
const corsMiddleWare = require("cors")

const { PORT } = require("./config/constants")
const userRouter = require("./routers/user")
const scoreboardRouter = require("./routers/scoreboard")
const authRouter = require("./routers/auth")

const app = express()
const bodyParserMiddleWare = express.json()

app.use(loggerMiddleWare("dev"))
app.use(bodyParserMiddleWare)

app.use(corsMiddleWare())


if (process.env.DELAY) {
    app.use((req, res, next) => {
        setTimeout(() => next(), parseInt(process.env.DELAY))
    })
}



app.post("/authorized_post_request", authMiddleware, (req, res) => {
    // accessing user that was added to req by the auth middleware
    const user = req.user;
    // don't send back the password hash
    delete user.dataValues["password"]

    res.json({
        youPosted: {
            ...req.body,
        },
        userFoundWithToken: {
            ...user.dataValues,
        },
    })
})


// Routes
app.use("/", authRouter);
app.use("/users", userRouter)
app.use("/score", scoreboardRouter)


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})