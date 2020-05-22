const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.login('{{votre token bot}}'); //a changer

client.commands = new Discord.Collection();

client.on('ready',() => {
  console.log(`bot Actif.`)
  setInterval(function() {
    console.log(`=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#`)
    console.log(`Latence API: ${Math.round(client.ping)}ms.`)
    console.log(`=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#`)
    },600000)//en ms - 10 minutes
});
