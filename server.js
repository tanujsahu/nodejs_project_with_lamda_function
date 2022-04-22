const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db/db')
// const { Handler, Context, Callback } = require('aws-lambda');
const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log("connect", port)
})