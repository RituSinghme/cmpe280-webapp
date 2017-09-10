'use strict';
var bodyParser = require('body-parser');
var express    = require('express');
var handle = require('./public/util/handle.js');
var path = require('path');
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
        res.send(html);
	}
);

app.post('/'+'code-post',
	function (req, res) {
		var emailAddress = req.param('email');
		console.log(emailAddress);
		handle.sendEmail(emailAddress);
		res.sendFile(path.resolve('public/validation.html'));
    }
);


app.listen(8080);
