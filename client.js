const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');


client.on('connect', function () {
    client.subscribe('Topic07');
    console.log('client has subscribed successfully');
});

client.on('message', function (topic, message) {
    console.log(message.toString()); //if toString is not given, the message comes as buffer
});


client.on('connect', function () {
    setInterval(function () {
        client.publish('Topic07', 'cricket');
    }, 3000);
});