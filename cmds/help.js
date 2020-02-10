const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "fig") 
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#d18dda") 
    .setDescription(`
Привееет! Я Sun - Твой личный помощник по этому уютному серверу!

${em1} Чтобы начать зарабатывать 🌞 монеты на свой баланс, взаимодействовать с участниками, покупать роли и многое другое - посмотри команды ниже! 


${em2} **Эмоции и действия с участниками**

sun!hug - обнять одного или всех участников сервера. 
sun!cry - расплакаться. 
sun!sad - начать грустить.
sun!kiss - поцеловать. 
sun!lick - лизнуть. 
sun!smile - улыбнуться.

${em2} **Серверные команды**

sun!help - команды для игроков сервера.
sun!adminhelp - команды администрации сервера.
sun!serverinfo - информация сервера.
sun!report - кинуть жалобу на игрока.
sun!translate - перевести с русского на английский и наоборот.

${em2} **Экономика**

sun!profile - Информация о пользователе.
sun!level - узнать свой текущий уровень
sun!daily - получить ежедневную награду.
sun!$ - проверить свой баланс конфет.
sun!shop - открыть магазин сервера.
sun!buy Номер роли - купить роль.
sun!work-list - список работ,чтобы работать
sun!work - начать работать`)
    .setImage("https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png")
    bot.send(embed);
};
module.exports.help = {
   name: "help"
};