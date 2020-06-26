const express = require('express');

const app = express();

let msg = [];

app.get("/add", function(req, res){

    console.log(req.query.msg)
    res.send("Message sent!")

    msg.push(req.query.msg)
    console.log(msg)
})

app.get("/msgs", function(req, res){

    res.send(msg)

})


app.listen(80);