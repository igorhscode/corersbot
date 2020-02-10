const Discord = require('discord.js')
const fs = require("fs");
const db = require('quick.db')
module.exports.run = async (bot,message,args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser 
    if (member) argsUser = member.user
    else argsUser = message.author
let coins = await db.fetch(`coins_${argsUser .id}`)
if (coins ===  null)  coins=  0;
let embed = new Discord.RichEmbed()
.setColor("#e8baf3")
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription("Баланс")
.addField('Игрок', argsUser.username)
.addField("Имеет",`${coins} ☀️`)
.setFooter("Не забудь взять ежедневный бонус - sun!daily")
bot.send(embed);  
};
module.exports.help = {
    name: "$"
}