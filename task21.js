// server side logic for working with web sockets, web apis and realtime connections


// importing the web socket module 

const webSocket = require('ws');


// creating a web socket server

const wss = new webSocket.Server({port: 5000});

//web socket server event handling

wss.on('connection', function connection(ws){
    console.log('client is connected');

    // handling incoming messages from clients

    ws.on('message', function incoming(message) {
        // broadcasting the message to all the clients except the sender

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === webSocket.OPEN){
                client.send(message);
            }
        })
    })


    // handling client disconnections

    ws.on('close', function close() {
        console.log('the client is disconnected now')
    })
})