
const express = require("express");
const app = express();
require('./dbconnect');
const cardRoutes = require('./routers/router');
let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/projects', cardRoutes);

app.get('/', (req, res) => {
    res.render('index.html');
});

const port = process.env.port || 8080;


//adding socket test
io.on('connection', (socket) => {
    console.log('a user connected'); 
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

http.listen(port, () => {
    console.log("Listening on port ", port);
});


