const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!hugUser) return message.channel.send(`${em1} для этого действия требуется пользователь. Попробуй sun!kiss @имя`).then(msg => msg.delete(15 * 1000));

    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/kiss`);

    let embed = new Discord.RichEmbed()
        .setTitle("Поцелуй! c:")
        .setDescription(`**${message.author.username}** поцеловал(а) **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("RANDOM")
    message.channel.send(embed)
};
module.exports.help = {
    name: "kiss",
};