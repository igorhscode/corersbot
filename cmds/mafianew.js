const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role = message.guild.roles.find(role => role.name === "・☀️ › SunEvent")
    let roleev = message.guild.roles.find(role => role.name === "・🌿 › EventMod") 
    let em1 = message.guild.emojis.find(emoji => emoji.name === "fig") 
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(`${em3} У вас нет прав для использования этой команды!!`);
    if(!args[0]) return bot.send(`${em3} Вы не указали Содержимое!`);
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(`
   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀** R I S I N G | М А Ф И Я**

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${role}
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${em1} Ведущий: <@${message.author.id}>
⠀⠀⠀⠀⠀⠀⠀⠀⠀${em2} Время проведения: ** ${botmessage} **

${em2} В самом начале ${roleev} распределяет роли в лс участникам. Мирный житель, Полицейский, Доктор, Мафия и Дон. Или же вас могут добавить в закрытые чаты ролей.Если Вам не написали в личные сообщения роль, то Вы являетесь мирным жителем. 

⠀⠀⠀⠀⠀⠀⠀. ︶︶︶. ̥ᔗ ${em2} [Подключиться](https://discord.gg/WyqHjbH) ${em2} ᔚ ̥ . ︶︶︶.

⠀⠀⠀⠀⠀⠀⠀⠀⠀˗ˏˋ☆ Победа ⠀⠀⠀⠀⠀⠀⠀˗ˏˋ☆ Участие⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀— 350 монет 🌞 ⠀⠀⠀⠀⠀— 100 монет 🌞⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
    .setImage('https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png')
    bot.send(embed);
};
module.exports.help = {
   name: "mafia"
};
