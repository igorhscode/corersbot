const Discord =  require('discord.js')
const db =  require('quick.db')
module.exports.run = async (bot,message,args) => {
    
    
    let author = db.fetch(`coins_${message.author.id}`)

    if (args[0] == '1') {
        if (author < 13000) return message.channel.send('У вас не хватает 🌞 монет для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "sunshine"))
        db.subtract(`coins_${message.author.id}`, 13000)
        message.channel.send(message.author.tag + ' Вы успешно купили данную роль за  `13000 🌞 монет`')
    } else if(args[0] == '2') {
        if (author < 10000) return message.channel.send('У вас не хватает 10000 🌞 монет для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "🍊Мандаринка"))

        db.subtract(`coins_${message.author.id}`, 10000)
        message.channel.send(message.author.tag + ' Вы успешно купили данную роль за  `10000 🌞 монет`')
    } else if(args[0] == '3') {
        if (author < 7800 ) return message.channel.send('У вас не хватает 7800 🌞 монет для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "хочу тян."))

        db.subtract(`coins_${message.author.id}`, 7800 )
        message.channel.send(message.author.tag + ' Вы успешно купили данную роль за  `7800  🌞 монет`')
    } else if(args[0] == '4') {
        if (author < 5000) return message.channel.send('У вас не хватает 5000 🌞 монет для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "хочу куна."))

        db.subtract(`coins_${message.author.id}`, 5000)
        message.channel.send(message.author.tag + ' Вы успешно купили данную роль за  `5000 🌞 монет`')
    } else if(args[0] == '5') {
        if (author < 8000) return message.channel.send('У вас не хватает 8000 🌞 монет для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "♡ Твоя лубофф♡"))

        db.subtract(`coins_${message.author.id}`, 8000)
        message.channel.send(message.author.tag + ' Вы успешно купили данную роль за  `8000 🌞 монет`')
    } else if(args[0] == '6') {
        if (author < 6700) return message.channel.send('У вас не хватает 6700 🌞 монет для покупки этой роли') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find(role => role.name === "фуфлик."))

        db.subtract(`coins_${message.author.id}`, 6700)
        message.channel.send(message.author.tag + ' Вы успешно купили данную роль за  `6700 🌞 монет`')
    }
    }
module.exports.help = {
    name: "buy"
}
