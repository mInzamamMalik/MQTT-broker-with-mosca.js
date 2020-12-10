var http = require('http');
var mosca = require('mosca');
var port = (process.env.PORT || 3000);


// var ascoltatore = {
//     //using ascoltatore
//     type: 'mongo',
//     url: 'mongodb://localhost:27017/mqtt',
//     pubsubCollection: 'ascoltatori',
//     mongo: {}
// };

var settings = {
    port: 1883
    // backend: ascoltatore
};

var Mqttsv = new mosca.Server(settings);

Mqttsv.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});

// // fires when a message is published, incase if you wanted to do something when each client publish something
// Mqttsv.on('published', function (packet, client) {

//     console.log('\nTopic', packet.topic);
//     console.log('Message', packet.payload);
// });

Mqttsv.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
    console.log('Mosca server is up and running', port);
}


// // to host along with http server
// var server = http.createServer();
// Mqttsv.attachHttpServer(server)
// server.listen(port, function (err) {
//     if (err) throw err;
//     console.log("Server is running on port: ", port);
// });