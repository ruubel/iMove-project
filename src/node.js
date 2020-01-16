const express = require('express')
const fs = require('fs')
const app = express()
const port = 9000
const cors = require("cors")
const bodyParser = require('body-parser')
const filePath = "data.txt"

app.listen(port, () => console.log("running server on http://localhost:" + port));

//Parsing the data using built-in parser
app.use(cors());
app.use(express.json());

// Enable cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//Fetching the useful data and writing to existing file.
app.post('/', function(req, res) {
    res.send('Registration successful, thank you for your time!');
    if (req.body.mail != "") {
        if (req.body.comment != "") {
            var body = "e-mail: " + req.body.mail + ". Comment: " + req.body.comment;
        } else {
            var body = "e-mail: " + req.body.mail + " No comment";
        }
        fs.appendFile(filePath, "\n" + body, function() {});
    } else {
        return false;
    }
});
app.get('/', function(req, res) {
    res.status(405).send("whops, method not allowed!")
});

//Catching empty post error
app.use(function(req, res, next) {
    res.status(404).send("Sorry can't find that!")
});