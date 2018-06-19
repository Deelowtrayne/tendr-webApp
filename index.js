//
const express = require('express');
const bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
const app = express();

// handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    helpers: {}
}));
app.set('view engine', 'handlebars');

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.render('home');
})

app.post("/search", function (req, res) {
    var q = req.body.searchStr;
    res.send();
})

app.listen(5000, function () {
    console.log("listening on port 5000...");
})