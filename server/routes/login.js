var express = require('express');
var router = express.Router();
var path = require('path');

//display home page
router.get('/', function(req, res){
	//not sure about rendering yet
	//res.render('index.html', {requestIP: req.ip});
	res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});

//make endpoint to create user
//router.pos('/users', function(req, res){ add user })

//get user by userid
router.get('/users/:id', function(req, res){
	//query database for userName
	uname = 'Fred'
	return res.send(uname)
});

router.post('/login', function(req, res){
	h = req.headers;
	//get users with uname = h.uname, if passwd matches login
	console.log('Logging in user: ' + h.uname);
	return res.sendFile(path.resolve(__dirname + '/../views/list-events.html')
});

router.post('/logout', function(req, res){
	return res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});


module.exports = router;
