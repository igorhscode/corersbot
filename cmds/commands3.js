const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`Имеется вопрос? Не стесняйся, задавай их прямо в чате, модераторы и администраторы сервера с радостью на них ответят. 
    Увидели как участник или модератор нарушает? Отправьте на него жалобу, с помощью команды: **space!report <@участник> причина**, так же просим вас делать скриншоты или видеозаписи доказательств и прикреплять на них ссылки после указания причины. `)
    bot.send(embed);
};
module.exports.help = {
   name: "n3"
};