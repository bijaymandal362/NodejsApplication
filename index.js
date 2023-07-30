const express = require('express');
const app = express();
const courses = require('./routes/courses');
const bodyParser = require('body-parser');
require("dotenv").config();
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use("/api", courses);
mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED");
}).catch((err) => {
    console.log("DB GOT OOPSIE");
    console.log(err);
});
app.listen(process.env.PORT
    , () => {
    console.log('Server is running on port 3000');
});