const express = require("express");

const app = express();

const server = app.listen(3005);

app.use(express.static("public"));

console.log("my socket server is running");
