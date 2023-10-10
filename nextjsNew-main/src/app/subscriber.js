const mqtt = require('mqtt');
//const axios = require('axios'); // Using axios to send HTTP requests
const options = {
    username: 'edgeRtu',
    password: 'Batw1ngs-User12!'
};
console.log("trying to connect");
const client = mqtt.connect('mqtt://10.100.100.100:1883');

client.on('connect', function () {
    console.log("trying to connect2 ");
    console.log('Connected to MQTT broker');
    client.subscribe("/plates/event");
});

client.on('message', function (topic, message){
    console.log(`${topic}: ${message.toString()}`);
});
