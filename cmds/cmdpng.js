const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(`**Привет, друг!**
    Хочется общения, друзей, может даже найти женщину/мужчину своей мечты? Тогда тебе сюда! Наш маленький, но уютный сервер поможет тебе в том!`)
    .setImage('https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png')
    bot.send(embed);
};
module.exports.help = {
   name: "png2"
};