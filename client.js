const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {
    client.subscribe('Topic07');
    console.log('client has subscribed successfully');
});

client.on('message', function (topic, message) {
    console.log("message received on client", message.toString()); //if toString is not given, the message comes as buffer
});


client.on('connect', function () {
    setInterval(function () {
        client.publish('Topic07',
            Buffer.from(
                `{
                    "score": "40",
                    "time": "${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}"
                }`
            ), () => {
                console.log("a topic is published from client ");
            });
    }, 3000);
});