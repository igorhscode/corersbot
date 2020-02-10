const Discord = require('discord.js')
const db = require('quick.db')
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
let role = message.guild.roles.find(role => role.name === "👶 Няня")
let role2 = message.guild.roles.find(role => role.name === "💻 Кодер")
let role3 = message.guild.roles.find(role => role.name === "👩‍🏫 Учитель")
let role4 = message.guild.roles.find(role => role.name === "🤡 Клоун")
let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle(`${bot.user.username} Работы!`)
    .setDescription(`▸ 1. Няня. ${role} - вы будете воспитывать детей.
    ▸ 2. Кодер. ${role2} - вы будете разрабатывать новые программы.
    ▸ 3. Учитель. ${role3} - вы будете обучать школьников и школьниц.
    ▸ 3. Клоун. ${role4} - вы будете работать клоуном в цирке.
Чтобы начать работать, используй команду sun!work <название работы>`)
    .setColor("RANDOM")
message.channel.send(embed)

}
module.exports.help = {
    name: "work-list"
}