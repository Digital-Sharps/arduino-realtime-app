#!/usr/bin/env nodejs

'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res){
    var ip = req.connection.remoteAddress.substr(7);
    res.status(200).sendFile(path.join(__dirname + '/files/index.html'));
    console.log(ip + ' accessed mainpage');
});

app.get('/api', function(req, res){
    var ip = req.connection.remoteAddress.substr(7);
    res.status(200).sendFile(path.join(__dirname+'/files/api.html'));
    console.log(ip + ' accessed API page');
});

var server = app.listen(process.env.PORT || '8080', function(){
    console.log('App listening on port %s', server.address().port);
    console.log('Press Ctrl+C to quit application');
});