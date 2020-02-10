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
let cc = message.guild.channels.find(channel => channel.name === "⟦💻⟧команды-сервера")
let c10 = message.guild.channels.find(channel => channel.name === "⟦💻⟧bot-chat")
let c11 = message.guild.channels.find(channel => channel.name === "⟦🎵⟧выбирай-песенку")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(`В данном категории, вы можете узнать много нужного и полезного о сервере <3 
    Давай перейдём уже к нашим каналам! 
    
    Каналы категории **информация: **
    ▸ ${c1} - ты тут.
    ▸ ${c2} - Правила или же конституция сервера.
    ▸ ${c3} - публикация изменений на сервере.
    ▸ ${c4} - роли сервера
    ▸ ${c6} - анонсы ивентов сервера.

    Каналы категории **чаты: **

    ▸ ${c8} - Основное общение на любые темы.
    ▸ ${c9} - Канал, созданный для флуда.
    ▸ ${c10} - Текстовый канал, созданный для взаимодействия с ботом.
    ▸ ${cc} - Информация о командах бота.
    
    Каналы в категории **музыка:** 
    ▸ ${c11} - чат для музыки`)
    bot.send(embed);
};
module.exports.help = {
   name: "new1"
};