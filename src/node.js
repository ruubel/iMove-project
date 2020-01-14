var express = require('express');
var router = express.Router();
var fs = require('fs')
var app = express();
var port = 9000;
var bodyParser = require('body-parser');
filePath = "../public/data.txt"
    /*
     * Routing to right port before accessing the post
     */
router.post('/myAction', function(req, res) {});

/*
 * Parsing the data using built-in parser
 */

app.use(bodyParser.urlencoded({
    extended: false
}));

/*
 * Fetching the useful data and writing to existing file.
 */

app.post('/myAction', function(req, res) {
    res.send('Got a POST request')
    if (req.body.mail != "") {
        if (req.body.comment != "") {
            var body = "e-mail: " + req.body.mail + ". Comment: " + req.body.comment;
            console.log(__dirname)
        } else {
            var body = "e-mail: " + req.body.mail + " No comment";
        }
        fs.appendFile(filePath, "\n" + body)
    }
    else{
    	return false;
    }
});

/*
 * Catching empty post error
 */

app.use(function(req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.listen(port, () => console.log("running server on http://localhost:" + port))