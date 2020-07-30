const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzM4MzUwMzg5NDA1MTU1MzQ4.XyKoYg.7Czu5Z95_DXb46SKXUWRXOXpg8A);//BOT_TOKEN is the Client Secret