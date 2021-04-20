const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.render("home");
});



app.listen(process.env.PORT|| 3000, function(req, res){
    console.log("Server started on Port 3000");
})
