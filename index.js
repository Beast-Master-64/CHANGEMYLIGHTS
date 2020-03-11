const express = require("express");
const app = express();
const path = require ("path");
const bodyParser = require('body-parser');


app.use(bodyParser.json({ type: 'application/*+json' }));

app.get("/",function(req,res){

    res.sendFile(path.join(__dirname , "index.html"));
})
app.post("/Lights", function(req,res){

res.send("testing");


})
app.listen (3000);