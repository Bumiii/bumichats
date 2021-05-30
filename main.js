const fetch = require('node-fetch');
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.on('ready', () => {
    client.user.setPresence({
        status: 'available',     //sets status button to green   
        activity: {
            name: `'!bc setup' to set me up`,    //This is the custom text  
            type: 'PLAYING'     //this is the type (duh). 'watching' would also be an option  
        }
        
    });
});

client.login(process.env.DISCORD_TOKEN);