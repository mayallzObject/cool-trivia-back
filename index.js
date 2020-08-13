const express = require("express")

const loggerMiddleWare = require("morgan")
const corsMiddleWare = require("cors")

const { PORT } = require("./config/constants")
const userRouter = require("./routers/user")
const scoreboardRouter = require("./routers/scoreboard")

const app = express()

app.use(loggerMiddleWare("dev"))

const bodyParserMiddleWare = express.json()
app.use(bodyParserMiddleWare)

app.use(corsMiddleWare())


if (process.env.DELAY) {
    app.use((req, res, next) => {
        setTimeout(() => next(), parseInt(process.env.DELAY))
    })
}


//! POST endpoint which requires a token for testing purposes, can be removed
// app.post("/authorized_post_request", authMiddleWare, (req, res) => {
//     // accessing user that was added to req by the auth middleware
//     const user = req.user;
//     // don't send back the password hash
//     delete user.dataValues["password"]

//     res.json({
//         youPosted: {
//             ...req.body,
//         },
//         userFoundWithToken: {
//             ...user.dataValues,
//         },
//     })
// })


// Routes
app.use("/users", userRouter)
app.use("/score", scoreboardRouter)


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})