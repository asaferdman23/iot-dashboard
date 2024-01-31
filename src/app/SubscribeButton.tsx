import React from 'react';
import * as mqtt from 'mqtt';
export const SubscribeButton = () => {
    const options = {
        username: 'edgeRtu',
        password: 'Batw1ngs-User12!'
    };

    const handleButtonClick = () => {
        console.log("trying to connect");
        const client = mqtt.connect('mqtt://10.100.100.100:1883', options);
        
        client.on('connect', function () {
            console.log("trying to connect2 ");
            console.log('Connected to MQTT broker');
            client.subscribe("/plates/event");
        });
        
        client.on('message', function (topic: any, message: { toString: () => any; }){
            console.log(`${topic}: ${message.toString()}`);
        });
    }
    const buttonStyle = {
        backgroundColor: '#007AFF',
        color: '#fff',
        border: 'none',
        borderRadius: '12px',
        padding: '10px 20px',
        fontSize: '16px',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.25)',
        outline: 'none',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        cursor: 'pointer'
    };

    return (
        <div>
            <button className="subscribe-button" onClick={handleButtonClick} style={buttonStyle} >Subscribe to mqtt</button>
        </div>
    ); 


};
export default SubscribeButton;