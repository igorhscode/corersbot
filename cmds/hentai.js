const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(`${em1} Ты должен быть в канале NSFW 🔞 `);

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**HENTAI**")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("by igor haventsound");

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
  name: "hentai"
}
