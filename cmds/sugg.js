const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    {
        if(message.author.bot) return
        if (!args[0]) return message.reply("Нету текста!");
        let rreason = args.join(" ").slice(22);
        let spy = new Discord.RichEmbed()
        .addField("📝Предложение от", `<@${message.author.id}>`)
        .addField("📢Канал", message.channel)
        .addField("📄Предложение", rreason)
      bot.channels.get('670287996649734164').send(spy)
    };


}

module.exports.help = {
  name: "suggetion",
  aliases: []
}