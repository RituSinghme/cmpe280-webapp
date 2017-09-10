'use strict';
var bodyParser = require('body-parser');
var express    = require('express');
var lineReader = require('line-reader');
var path       = require('path');

const User = require('./public/model/user.js');

// Create the app.
var app = express();

// Use the bodyParser() middleware for all routes.
app.use(bodyParser());
app.use(express.static("public"));

app.post('/'+'login-valid',
	function(req, res)
	{
		var username = req.param('username');
		var password = req.param('password');

		var html = 'password: ' + password + ' username: ' + username;

		let user = new User(username, password);
    	console.log(user.password);
		res.send(html);

	}
);




app.listen(8080);
