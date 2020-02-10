
    const Discord = require("discord.js");
    
    module.exports.run = async (bot, message, args) => {
        let em1 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!hugUser) return message.channel.send(`${em1} для этого действия требуется пользователь. Попробуй sun!lick @имя`).then(msg => msg.delete(15 * 1000));
    
        let embed = new Discord.RichEmbed()
            .setDescription(`**${message.author.username}** Лизнул(а) **${message.mentions.users.first().username}**!`)
            .setImage('https://cdn.discordapp.com/attachments/547009425005740042/676035984160325632/emotion.gif')
            .setColor("RANDOM")
        message.channel.send(embed)
    };
    module.exports.help = {
        name: "lick",
    };
