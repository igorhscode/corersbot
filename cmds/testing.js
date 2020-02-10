const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser 
    if (member) argsUser = member.user
    else argsUser = message.author
    let role1 = message.guild.channels.find(channel => channel.name === "╭🌺приветствие")
    let role2 = message.guild.channels.find(channel => channel.name === "┃📜правила")
let embed = new Discord.RichEmbed()
    .addField("Правила сервера:", `${role1}`, true) //Создаем поле с дин. размером
    .addField("Информация о сервере:", `${role2}`, true) //Создаем поле с дин. размером
    .setDescription(`Хей, привет, <@${message.author.id}> !
    Мы рады видеть тебя в **Космосе** 
    Рекомендуем ознакомиться с разделами ниже!`)
    .setFooter(`ID: ${argsUser.id}`)
    .setThumbnail("https://images-ext-1.discordapp.net/external/Z5D98MT7PfNlnKMp-PXlJoXZs5OfThLYCCIVkVfwtVs/https/media.discordapp.net/attachments/642066587129741344/662853963779145748/Pak.gif?width=473&height=473")
    bot.send(embed);
};
module.exports.help = {
   name: "test"
};
