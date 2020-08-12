const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Hi from express");
});


app.post("/echo", (req, res) => {
    res.json({
        youPosted: {
            ...req.body
        }
    });
});


const { PORT } = require("./config/constants");

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
