const Discord = require('discord.js'); //Модуль discord.js =\

module.exports.run = (bot, message, args) => { //Модуль экспорт бежать бот, сообщения, аргументы (забудьте это)
    let vime = message.guild.emojis.find(emoji => emoji.name === "vime_logo")
    let cs = message.guild.emojis.find(emoji => emoji.name === "cs_logo")
    let dota = message.guild.emojis.find(emoji => emoji.name === "dota_logo")
    let mine = message.guild.emojis.find(emoji => emoji.name === "mine_logo")
    let rolevime = message.guild.roles.find(role => role.name === "VimeWorld")
    let rolecs = message.guild.roles.find(role => role.name === "Cs-go")
    let roledota = message.guild.roles.find(role => role.name === "Dota 2")
    let rolemine = message.guild.roles.find(role => role.name === "Майнкрафт")

if(message.guild.id !== '490122377007464462') return
    let embed = new Discord.RichEmbed() 
        .setColor("RANDOM") 
        .setAuthor(`Роли.`) 
        .setDescription(`${vime} - ${rolevime} \n${cs} - ${rolecs} \n${dota} - ${roledota} \n ${mine} - ${rolemine}`)
        .setFooter(`${message.author.username}`, message.author.avatarURL)
        .setTimestamp()
    message.channel.send(embed).then(msg => {
        msg.react(vime).then( r => { 
            msg.react(cs)
            msg.react(dota)
            msg.react(mine)
            const a = (reaction, user) => reaction.emoji.name === 'vime_logo'
            const b = (reaction, user) => reaction.emoji.name === 'cs_logo'
            const c = (reaction, user) => reaction.emoji.name === 'dota_logo'
            const d = (reaction, user) => reaction.emoji.name === 'mine_logo'
            const e = msg.createReactionCollector(a, { time: 999000 }); 
            const f = msg.createReactionCollector(b, { time: 999000 });
            const g = msg.createReactionCollector(c, { time: 999000 });
            const h = msg.createReactionCollector(d, { time: 999000 });
            e.on('collect', r => { 
                let roleS = message.guild.roles.find(r => r.name === 'VimeWorld'); 
                if (message.member.roles.has(roleS.id)) {
                    message.member.removeRole(`645575185134649354`);
                }
                if (!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS);
                }
            })
            f.on('collect', r => {
                let roleS = message.guild.roles.find(r => r.name === 'Cs-go');
                if (message.member.roles.has(roleS.id)) {
                    message.member.removeRole(`645569794489450516`);
                }
                if (!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS);
                }
            })
            g.on('collect', r => {
                let roleS = message.guild.roles.find(r => r.name === 'Dota 2');
                if (message.member.roles.has(roleS.id)) { 
                    message.member.removeRole(`645570303556190218`);
                }
                if (!message.member.roles.has(roleS.id)) { 
                    message.member.addRole(roleS); 
                }
            })
            h.on('collect', r => {
                let roleS = message.guild.roles.find(r => r.name === 'Майнкрафт');
                if (message.member.roles.has(roleS.id)) { 
                    message.member.removeRole(`645570141320380427`); 
                }
                if (!message.member.roles.has(roleS.id)) { 
                    message.member.addRole(roleS); 
                }
            })
        })
    })
}
module.exports.help = {
    name: 'roleadd' 
}