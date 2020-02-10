const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(`${em1} У вас нет прав для использования этой команды!!`);
    if(!args[0]) return bot.send(`${em1} Вы не указали Содержимое!`);
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(botmessage)
    .setImage('https://media.discordapp.net/attachments/635917406568710144/638343117140918283/-6.gif')
    message.channel.send(embed);
};
module.exports.help = {
    name: "new"
};