const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#d18dda")
    .setDescription("**Вы получили гендерную роль**")
    .setImage("https://i.gifer.com/AZ4d.gif")
    .setFooter('Бот создан - haventsound')
    bot.send(embed);   
    
    let guildMember = message.member;
    guildMember.addRole('668899046022447107'); 
};
module.exports.help = {
    name: "choicegirl"
};