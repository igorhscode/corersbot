const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
let rolef1 = message.guild.roles.find(role => role.name === "・🌞  › SUN ADMIN")
let rolef2 = message.guild.roles.find(role => role.name === "・☘️ › SunGrand Moder")
let rolef3 = message.guild.roles.find(role => role.name === "・⚡️ › Sun Moder")
let rolef4 = message.guild.roles.find(role => role.name === "・🔑 › DEV")
let rolef5 = message.guild.roles.find(role => role.name === "・🌿 › EventMod")
let role1 = message.guild.roles.find(role => role.name === "・🚀 › Nitro Booster")
let rolef0 = message.guild.roles.find(role => role.name === "・⭐ › Звезда")
let rolefgender1 = message.guild.roles.find(role => role.name === "・☀️ › SunGirl")
let rolefgender2 = message.guild.roles.find(role => role.name === "・☀️ › SunMan")
let rolefdesign = message.guild.roles.find(role => role.name === "𝙆 𝙖 𝙩 𝙨 𝙪 ♡")
let rolefuch = message.guild.roles.find(role => role.name === "・☀️ › Sun Player")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(`
    Ну а теперь давай перейдём к нашим ролям и достижениям на сервере <3 

    **Администрация**:
▸ ${rolef1} — Главная администрация сервера
▸ ${rolef2} — Старшая администрация
▸ ${rolef3} — Младшая администрация
▸ ${rolef4} — Разработчик сервера
▸ ${rolef5} — Ивентеры сервера

**Хорошая поддержка сервера**

${role1} — дается за буст сервера.


${rolefuch} — Даётся при входе на сервер.

_**Гендерные роли:**_

${rolefgender1} - можно получить с помощью реакции

${rolefgender2} - можно получить с помощью реакции

**Примечание! 
Роли будут пополняться**`)
.setImage('https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png')
bot.send(embed);
};
module.exports.help = {
name: "new2"
};