// imports
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


// HOME PAGE
app.get("/", function (req, res) {
    res.render('home');
})

// SEARCH RESULTS
app.get("/search", function (req, res) {
    res.render('search');
})

app.post("/search", function (req, res) {
    var q = req.body.searchStr;
    res.render('search');
})

// TENDER VIEW
app.get('/tender/:tenderNumber', function(req, res){
    var tenderNum = req.params.tenderNumber;
    res.send(`
        <h2>Viewing tender number: ${tenderNum}</h2>
        <p>Nothing here yet</p>
    `)
    //res.render('tender');
})

app.listen(5000, function () {
    console.log("listening on port 5000...");
})
