var express = require('express');
var app = express();
var path = require('path');


// ROUTES FOR OUR API
// ====================================================
var login = require('./routes/login');
var events = require('./routes/events');

app.use(login);
app.use(express.static(__dirname + '/views'));

//keep this last, as it will return 404
app.use(function(req, res, next){
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    return res.render('views/404', { url: req.url });
  }
  // respond with json
  if (req.accepts('json')) {
    return res.send({ error: 'Not found' });
  }
  // default to plain-text. send()
  return res.type('txt').send('Not found');
});

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port

	console.log('Magic happens at http://%s:%s', host, port)
})
