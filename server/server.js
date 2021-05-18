const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const notes = require("./routes/api/notes.js");
const topics = require("./routes/api/topics.js");

const app = express();
app.use(bodyParser.json())

const PORT = process.env.PORT || 8080;

// var cors = require('cors');
// app.use(cors())

mongoose.connect('mongodb://localhost:27017/noteKeeper', {useNewUrlParser: true,useUnifiedTopology: true})
        .then(()=>console.log("MongoDB connected"))
        .catch((err)=>console.log(err));

app.use("/api/topic/",notes);
app.use("/api/topics",topics);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/",(req,res)=>{
    res.send("Helllooo worldoo");
})

app.listen(PORT,()=>console.log("Sever started"))