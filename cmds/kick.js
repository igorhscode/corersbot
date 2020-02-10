const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      let em1 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${em1} У вас нет прав`);
    let rUser = bot.rUser;
    if(!args[0]) return bot.send(`${em1} Вы не указали пользователя`);
    if(!rUser) return bot.send(`${em1} Пользователь не найден`);
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`${em1} нее... Вы не можете его исключить из сервера!`);
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription("Кик")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Кикнул",`${rUser.user.username}`);
    
    message.guild.member(rUser).kick("123");
    message.channel.send(embed);   
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "kick"
};
