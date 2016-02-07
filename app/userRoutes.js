var jwt = require('jsonwebtoken');
var express = require('express');

var userApiRoutes = express.Router();

module.exports = function(app) {

	// Verify user token ===========================
	userApiRoutes.use(function(req,res,next){
		var token = req.body.token || req.query.token || req.headers['x-access-token'];
		if (token) {
			jwt.verify(token, app.get('superSecret'), function(err,decoded){
				if (err) {
					return res.json({ success: false, message: 'Failed to authenticate token!'});
				} else {
					req.decoded = decoded._doc;
					next();
				}
			});
		} else {
			return res.status(403).send({
				success: false,
				message: 'No token provided!'
			});
		}
	});

	// User routes ==================================
	userApiRoutes.get('/hello/:username', function(req,res){
		var hello = {
			name: "HelloMessage",
			description: "This message says hello",
			message: "Hello " + req.params.username
		};
		res.json(hello);
	});

	app.use('/user',userApiRoutes);

};