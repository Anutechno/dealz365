const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const users = require("./routes/userRouter");
const categories = require("./routes/categoryRoute");

let cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload());

app.use("/api/v1", users);
app.use("/api/v1", categories);


module.exports = app;