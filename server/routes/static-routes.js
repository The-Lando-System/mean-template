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
	staticRoutes.get('/user-management/*', function(req,res){
		res.sendFile(index);
	});
	staticRoutes.get('/user-page', function(req,res){
		res.sendFile(index);
	});

	// Common View Components ===================
	staticRoutes.get('/error-message', function(req,res){
		res.sendFile(base + '/public/app/directives/error-message/error-message.html');
	});
	staticRoutes.get('/navbar', function(req,res){
		res.sendFile(base + '/public/app/layout/navbar/navbar.html');
	});
	staticRoutes.get('/object-table', function(req,res){
		res.sendFile(base + '/public/app/directives/object-table/object-table.html');
	});

	app.use('/',staticRoutes);
};