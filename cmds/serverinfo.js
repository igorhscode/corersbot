const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL) // параметры: имя: string, картинка: string, url: string
    .addField('Владелец', message.guild.owner, true) // параметры: название: string, значение: string, в линию?: boolean (true, false)
    .addField('ID', message.guild.id, true)
    .addField('Регион', message.guild.region, true)
    .addField('Участники', `${message.guild.presences.size} в сети\n ${message.guild.memberCount} всего`, true)
    .addField('Каналы', `${message.guild.channels.filter( c =>   c.type ==  'text').size} текстовых\n${message.guild.channels.filter( c =>  c.type ==  'voice').size} голосовых`, true)
    .addField('AFK Канал', message.guild.afkChannel.name, true)
    .addField('Ролей', message.guild.roles.size, true)
    .addField('Смайликов', message.guild.emojis.size, true)
    .setFooter('Сервер создан') // параметры: текст: string, картинка: string
    .setTimestamp(new Date(message.guild.createdTimestamp)) // конверт времени
    .setColor(0x32d160) // цвет
    .setImage('https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png')
       await message.channel.send(embed) // отправка в канал
   }
   
   module.exports.help = {
    name: 'serverinfo' // название команды
   }