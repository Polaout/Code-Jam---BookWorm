const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || Math.floor((Math.random() * (3000 + 1 - 1000)) + 1000);

const fs = require('fs');
const path = require('path')

const accounts = [
    { 
        id: "D29SAL39SL32",
        account: {
            username: "AugustoFoda2023",
            password: "eusoufodinha",
            icon: {
                status: true,
                image: "./images/profiles/default/default-1.jpg"
            }
        }
    }
];

function generateID(length) {

    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = length;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {

        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    
    }

    return password;



}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/app.html');
});

app.use('/css', express.static(__dirname + '/css'));

app.use('/fonts', express.static(__dirname + '/fonts'));

app.use('/images', express.static(__dirname + '/images'));

app.use('/js', express.static(__dirname + '/js'));

app.use('/socket.io', express.static(__dirname + '/socket.io'));

http.listen(port, () => { });

io.on('connection', async (socket) => {
    
    socket.on("newAccountCreate", (event) => {

        console.log("Nova Conta sendo criada!");

        accounts.forEach(account => {

            

        })

    });

    socket.on("disconnect", () => {

        

    });

});