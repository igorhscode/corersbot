const Discord = require('discord.js')
const db = require('quick.db')
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
let role = message.guild.roles.find(role => role.name === "sunshine")
let role2 = message.guild.roles.find(role => role.name === "🍊Мандаринка")
let role3 = message.guild.roles.find(role => role.name === "хочу тян.")
let role4 = message.guild.roles.find(role => role.name === "хочу куна.")
let role5 = message.guild.roles.find(role => role.name === "♡ Твоя лубофф♡")
let role6 = message.guild.roles.find(role => role.name === "фуфлик.")
let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle(`${bot.user.username} Магазин!`)
    .setDescription(`1. ${role} - 13000 🌞
    2. ${role2} - 10000 🌞
    3. ${role3} - 7800 🌞
    4. ${role4} - 5000 🌞
    5. ${role5} - 8000 🌞
    6. ${role6} - 6700 🌞
Чтобы купить роль, используй команду sun!buy номер`)
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png')
message.channel.send(embed)

}
module.exports.help = {
    name: "shop"
}