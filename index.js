const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || Math.floor((Math.random() * (3000 + 1 - 1000)) + 1000);

const fs = require('fs');
const path = require('path')

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/html/home.html');
});

app.use('/css', express.static(__dirname + '/css'));

app.use('/fonts', express.static(__dirname + '/fonts'));

app.use('/images', express.static(__dirname + '/images'));

app.use('/js', express.static(__dirname + '/js'));

app.use('/socket.io', express.static(__dirname + '/socket.io'));

http.listen(port, () => { });

io.on('connection', async (socket) => {
    
    socket.on("disconnect", () => {

        

    });

});