var jwt = require('jsonwebtoken');
var express = require('express');
var path = require('path');

var base = path.resolve(__dirname + '/../..');
var staticRoutes = express.Router();

module.exports = function(app) {

	// Application Routes ======================
	var index = base + '/public/index.html';

	staticRoutes.get('/', function(req,res){
		res.sendFile(index);
	});
	staticRoutes.get('/login', function(req,res){
		res.sendFile(index);
	});
	staticRoutes.get('/home', function(req,res){
		res.sendFile(index);
	});
	staticRoutes.get('/view1', function(req,res){
		res.sendFile(index);
	});
	staticRoutes.get('/view2', function(req,res){
		res.sendFile(index);
	});
	staticRoutes.get('/user-management', function(req,res){
		res.sendFile(index);
	});

	// Common View Components ===================
	staticRoutes.get('/error-message', function(req,res){
		res.sendFile(base + '/public/app/directives/messages/error-message.html');
	});
	staticRoutes.get('/success-message', function(req,res){
		res.sendFile(base + '/public/app/directives/messages/success-message.html');
	});
	staticRoutes.get('/navbar', function(req,res){
		res.sendFile(base + '/public/app/layout/navbar/navbar.html');
	});
	staticRoutes.get('/object-table', function(req,res){
		res.sendFile(base + '/public/app/directives/object-table/object-table.html');
	});
	staticRoutes.get('/jumbotron', function(req,res){
		res.sendFile(base + '/public/app/directives/jumbotron/jumbotron.html');
	});
	staticRoutes.get('/user-modal', function(req,res){
		res.sendFile(base + '/public/app/layout/users/user-modal/user-modal.html');
	});
	staticRoutes.get('/confirm-dialog', function(req,res){
		res.sendFile(base + '/public/app/directives/confirm-dialog/confirm-dialog.html');
	});
	staticRoutes.get('/notification', function(req,res){
		res.sendFile(base + '/public/app/directives/messages/notification.html');
	});

	app.use('/',staticRoutes);
};