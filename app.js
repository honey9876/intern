require("dotenv").config({path: "./.env"});
const express = require("express");
const app = express();

// const PORT = 3030;

const logger = require("mogan");
const ErrorHandler = require("./utils/ErrorHandler");
app.use(logger("tiny"));

app.use("/", require("./routes/indexRoutes"));

// error handaling
const ErrorHandler = require("./utils/ErrorHandler");
const { genetatedError } = require("./middlewares/errors");
app.all("*", (req,res, next) => {
    next(new ErrorHandler(`req url not found ${req.url}`, 404));
})

app.use(genetatedError);




app.listen(
    process.env.PORT, 
    console.log(`server running on port ${process.env.PORT}`)
    );