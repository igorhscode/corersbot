const db = require('quick.db')
const Discord = require('discord.js')
const fs = require("fs");
const ms = require('parse-ms')
module.exports.run = async (bot, message, args) => {

    let timeout = 1800000 // 30м = 1 800 000 мил 
    let amount = 500 //число космо-коинов
    


    let daily1 = await db.fetch(`daily1_${message.author.id}`);

    if (daily1 !== null && timeout - (Date.now() - daily1) > 0) {
        let time = ms(timeout - (Date.now() - daily1));

        message.channel.send(`Вы уже поработали и получили зарплату, подождите еще **${time.minutes}м ${time.seconds}с**!`)
    } else {
    if(args[0] == 'Няня') {

        let amount = Math.floor(Math.random() * 500) + 1; 

        let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`<@${message.author.id}>, ты отработал сменку за Няню. Теперь получи ${amount} 🌞 за успешную работу`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`coins_${message.author.id}`, amount)
        db.set(`daily1_${message.author.id}`, Date.now())
    } else if(args[0] == 'Кодер') {
        let amount = Math.floor(Math.random() * 500) + 1; 

        let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`<@${message.author.id}>, ты успешно разработал код, Юный Программист. Теперь получи ${amount} 🌞 за успешную работу`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`coins_${message.author.id}`, amount)
        db.set(`daily1_${message.author.id}`, Date.now())
    } else if(args[0] == 'Учитель') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL) 
        .setDescription(`<@${message.author.id}>, ты успешно отработал смену, обучая школьников. Теперь получи ${amount} 🌞 за успешную работу`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`coins_${message.author.id}`, amount)
        db.set(`daily1_${message.author.id}`, Date.now())
} else if(args[0] == 'Клоун') {
    let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setDescription(`<@${message.author.id}>, ты успешно отработал смену, работая в цирке. Теперь получи ${amount} 🌞 за успешную работу`)
    .setColor("RANDOM")
    

    message.channel.send(embed)
    db.add(`coins_${message.author.id}`, amount)
    db.set(`daily1_${message.author.id}`, Date.now())
}

}
}

module.exports.help = {
    name: "work"
}