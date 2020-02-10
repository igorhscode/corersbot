const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => { 
  let botmessage = args.join(" ");
  let em1 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${em1} У вас нет прав`);
    if (!args[0]) return message.reply("А где вопрос?");
  if (!args) return message.reply("Тебе должны голосовать")
    const pollTopic = await message.channel.send(botmessage);
    pollTopic.react(`✅`);
    pollTopic.react(`⛔`);
};

module.exports.help = {
    name:"poll"

}