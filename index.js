// imports
const express = require('express');
const bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
const fs = require('fs-extra');
const Tenders = require('./js/tenders');
var jsonData = require('./tenders.json');

const app = express();

const tenderObj = Tenders(jsonData);

// handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    helpers: {
        "roundedValue": function(){
            return this.toFixed(2);
        }
    }
}));
app.set('view engine', 'handlebars');

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HOME PAGE
app.get("/", function (req, res) {
   // console.log(tenderObj.filterBy());
    
    res.render('home');
})

// SEARCH RESULTS
app.get("/search", function (req, res) {
    res.render('search', {allData: tenderObj.data});
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
