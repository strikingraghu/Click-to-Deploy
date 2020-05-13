//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(express.static("public"));


app.listen(3000, function(req, res) {
    console.log("Server Running")
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/form.html", function(req, res) {
    res.sendFile(__dirname + "/form.html");
})