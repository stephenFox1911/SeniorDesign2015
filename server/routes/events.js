var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});

//get all event ids
router.get('/events', function(req, res){
	var ids = [];
	ids.push(1);
	ids.push(2);
	ids.push(3);
	return res.send(ids);
});

//get all members of an event
router.get('/events/:id', function(req, res){
	//query users of the event
	var members = []
	members.push('Jeff');
	members.push('George');
	members.push('Bob');
	return res.send(members);
});

//create a new event
router.post('/events', function(req, res){
	h = req.headers;
	//check to make sure info is valid

	//add to database
	return res.send({Success: 'True'});
});


//join an event
router.post('/events/:id', function(req, res){
	var eventid = req.params.id;
	var curruser = 1;	//replace with logged on userid

	//insert into database
	return res.send({Success: 'True'});
});

//leave a trip
router.delete('/events', function(req, res){
	var curruser = 1; 	//replace with logged on userid
	//remove from database

	return res.send({Sucess: 'True'});
});

module.exports = router;
