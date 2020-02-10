const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
  let em1 = message.guild.emojis.find(emoji => emoji.name === "yes")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setDescription(`❯ ${em1} [ссылка](https://vk.com/sw_igor)`)
    message.channel.send(embed)
    msg.react("675762644551991296")
    }
module.exports.help = {
  name: "123"
  }