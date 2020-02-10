const Discord = require("discord.js");
const { Canvas } = require('canvas-constructor');
module.exports.run = async(bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setDescription(`${message.author} плачет`)
    .setColor('#f39ee2')
    .setImage('https://cdn.discordapp.com/attachments/547009425005740042/676032969772761127/emotion.gif')
    message.channel.send(embed);
}
 
module.exports.help = {
    name: "cry"
}