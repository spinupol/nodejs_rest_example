var express = require('express');
var bodyParser = require('body-parser');

var app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var quotes= [
{ who: 'Trump', what: 'I know words. I have the best words.' },
{ who: 'Bender', what: 'Bite my shiny metal ass' },
{ who: 'Teal\'c', what: 'Indeed.' },
{ who: 'Tyler', what: 'Can I take your picture before I beat you up?' }
];

app.get('/', function(req, res) {
res.type('text/plain');
res.send('test REST API');
});

app.get('/quote/all', function(req, res) {
res.json(quotes);
});

app.get('/quote/random', function(req, res) {
var id = Math.floor(Math.random() * quotes.length);
var q = quotes[id];
res.json(q);
});

app.get('/quote/:id', function(req, res) {
if(quotes.length <= req.params.id || req.params.id < 0) {
res.statusCode = 404;
return res.send('Error 404: index not found');
}
var q = quotes[req.params.id];
res.json(q);
});

app.post('/quote', urlencodedParser, function(req, res) {

if (!req.body.hasOwnProperty('who') || !req.body.hasOwnProperty('what')) {
res.statusCode = 400;
return res.send('Error 400: Post syntax incorrect.');
}

var newQuote = {
who: req.body.who,
text: req.body.what
};

quotes.push(newQuote);
res.json(newQuote);
});

app.delete('/quote/:id', function(req, res) {
if(quotes.length <= req.params.id) {
res.statusCode = 404;
return res.send('Error 404: Index not found');
}
quotes.splice(req.params.id, 1);
res.json(true);
});
app.listen(9000);
