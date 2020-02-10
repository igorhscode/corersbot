const Discord = require("discord.js");
const { Canvas } = require('canvas-constructor');
module.exports.run = async(bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setDescription(`${message.author} грустит`)
    .setColor('#f39ee2')
    .setImage('https://cdn.discordapp.com/attachments/547009425005740042/666316095044583444/emote.gif')
    message.channel.send(embed);
}
 
module.exports.help = {
    name: "sad"
}