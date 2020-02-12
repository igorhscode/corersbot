const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role = message.guild.roles.find(role => role.name === "・☀️ › SunEvent")
    let ivent = message.guild.roles.find(role => role.name === "・🌿 › EventMod")
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
   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀** R I S I N G  S U N | Ш Л Я П А **

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${role}
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${em1} Ведущий: <@${message.author.id}>
⠀⠀⠀⠀⠀⠀⠀⠀⠀${em2} Время проведения: ** ${botmessage} **

${em2} Участники Ивента делятся на команды или же по парам. В командах выбирается один ведущий - объясняющий слова, которые ему напишет в лс ${ivent}

⠀⠀⠀⠀⠀⠀⠀. ︶︶︶. ̥ᔗ ${em2} [Подключиться](https://discord.gg/CEvqea7) ${em2} ᔚ ̥ . ︶︶︶.

⠀⠀⠀⠀⠀⠀⠀⠀⠀˗ˏˋ☆ Победа ⠀⠀⠀⠀⠀⠀⠀˗ˏˋ☆ Участие⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀— 200 монет 🌞 ⠀⠀⠀⠀⠀⠀⠀ ⠀⠀— 50 монет 🌞⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
    .setImage('https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png')
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "шляпа"
};
