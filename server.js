var mosca = require('mosca');

// var ascoltatore = {
//     //using ascoltatore
//     type: 'mongo',
//     url: 'mongodb://localhost:27017/mqtt',
//     pubsubCollection: 'ascoltatori',
//     mongo: {}
// };

var settings = {
    port: 1883,
    // backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});

// // fires when a message is published, incase if you wanted to do something when each client publish something
// server.on('published', function (packet, client) {

//     console.log('\nTopic', packet.topic);
//     console.log('Message', packet.payload);
// });

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
    console.log('Mosca server is up and running');
}