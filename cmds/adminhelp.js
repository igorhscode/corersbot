const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "fig") 
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#d18dda")
    .setDescription(`${em1} **Доступные команды:** ${em2}
    sun!ban - Выдается перманентный бан аккаунта
    sun!clear - число Очищает чат от флуда или сообщений иного характера
    sun!kickКикает - участника
    sun!mute - время в секундах Выдается мут аккаунта
    sun!unmute - Убирает мут аккаунта
    sun!say - сообщение Отправляется сообщение от лица бота 
    sun!warn - Выдается предупреждение аккаунту
    sun!unwarn - Убирает предупреждение аккаунту
    sun!gamewarn - Выдается игровое предупреждение аккаунту
    sun!gameunwarn - Убирает игровое предупреждение аккаунту
    sun!+$ и sun!-$ - Может добавить денег или убрать денежные средства
    `)
    .setImage("https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png")
    bot.send(embed);
};
module.exports.help = {
   name: "adminhelp"
};