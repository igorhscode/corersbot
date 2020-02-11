const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {

    let em1 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "yes")

    let user = message.mentions.members.first() 

    let member = db.fetch(`coins_${message.author.id}`)


    if (!user) {
        return message.channel.send(`${em1} Вы не указали пользователя`)
    }
    if (!args[1]) {
        return message.channel.send(`${em1} Пожалуйста, укажите сумму.`)
    }
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send(`${em1} Нельзя переводить 🌞 монетки с минусом`)
    }

    if (member < args[1]) {
        return message.channel.send(`** ${em1} Ты указал больше 🌞 монет, чем у тебя на счету. Попробуй снова**`)
    }

    message.channel.send(`${em2} ${message.author.tag}, Ты успешно перевёл ${user.user.username}  монет ${args[1]}🌞.`)
    db.add(`coins_${user.id}`, args[1])
    db.subtract(`coins_${message.author.id}`, args[1])




}
module.exports.help = {
    name: "pay"
};
