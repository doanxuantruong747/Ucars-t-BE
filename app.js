
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { sendResponse, AppError } = require("./helpers/untils")
const indexRouter = require('./routes/index');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', indexRouter);



//connect moggose
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI).then(() => console.log('DB connected')).catch((err) => console.log(err))

//Error Handlers
// Create an error with 404 and message.
app.use((req, res, next) => {
    const err = new AppError(404, "Not Found", "Bad Request");
    next(err);
});

//Internal Server Error type.
app.use((err, req, res, next) => {
    console.log("ERROR", err);
    return sendResponse(
        res,
        err.statusCode ? err.statusCode : 500,
        false,
        null,
        { message: err.message },
        err.isOperational ? err.errorType : "Internal Server Error"
    );
});



module.exports = app;
