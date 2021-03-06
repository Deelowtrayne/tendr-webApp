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
    res.render('home', tenderObj.getIndustryNames());
})

// SEARCH RESULTS
app.get("/search/:search_string", function (req, res) {
    let qs = decodeURI(req.params.search_string);
    res.render('search', {
        vendorMatches: tenderObj.filterBy(qs, 'vendor'),
        industryMatches: tenderObj.filterBy(qs, 'industry'),
        dateMatches: tenderObj.filterBy(qs, 'awardedDate'),
    });
})
app.get("/filter", function (req, res) {
    res.render('filter', {allData: tenderObj.data});
})
app.get("/tender", function (req, res) {
    res.render('tender', {allData: tenderObj.data});
})
app.get("/about", function (req, res) {
    res.render('about');
})
app.get("/tender", function (req, res) {
    res.render('tender', {allData: tenderObj.data});
})

app.post("/search", function (req, res) {
    var q = req.body.searchInput;
    res.render('search', {
        vendorMatches: tenderObj.filterBy(q, 'vendor'),
        industryMatches: tenderObj.filterBy(q, 'industry'),
        dateMatches: tenderObj.filterBy(q, 'awardedDate'),
    });
});

// TENDER VIEW
app.get('/tender/:id', function(req, res){
    var id = req.params.id;
    // console.log(tenderObj.findTenderByID(id));
    
    res.render('tender', {
      tender: tenderObj.findTenderByID(id)
    });
})

// about page
app.get("/about", function (req, res) {
    res.render('about', {allData: tenderObj.data});
})

let PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("listening on port 5000...");
})
