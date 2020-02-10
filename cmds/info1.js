const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
let c1 = message.guild.channels.find(channel => channel.name === "⟦🌸⟧приветствие")
let c2 = message.guild.channels.find(channel => channel.name === "⟦📌⟧правила")
let c3 = message.guild.channels.find(channel => channel.name === "⟦📰⟧новости")
let c4 = message.guild.channels.find(channel => channel.name === "⟦🔖⟧роли")
let c6 = message.guild.channels.find(channel => channel.name === "⟦🎉⟧ивенты")
let c8 = message.guild.channels.find(channel => channel.name === "⟦🍨⟧общий")
let c9 = message.guild.channels.find(channel => channel.name === "⟦📪⟧спам")
let c10 = message.guild.channels.find(channel => channel.name === "⟦💻⟧bot-chat")
let c11 = message.guild.channels.find(channel => channel.name === "⟦🎵⟧выбирай-песенку")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(`**Полезные ссылки
    ❯  Беседа в вк - [тык](https://vk.me/join/AJQ1dwZBrgLR4NKNpj6CY3HX)
    ❯  Ссылка на этот сервер - [тык](https://discord.gg/Ajwd7g)**`)
    .setImage('https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png')
    bot.send(embed);
};
module.exports.help = {
   name: "ns"
};