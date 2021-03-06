const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
let em1 = message.guild.emojis.find(emoji => emoji.name === "animated_cross")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${em1} У вас нет прав`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send(`${em1} Вы не указали пользователя`);
    if(!rUser) return bot.send(`${em1} Пользователь не найден`);
    if(!args[1]) return bot.send(`${em1} Укажите время в секундах`);
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Заглушил",`${rUser.user.username}`);
    
    message.channel.send(embed);

    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role){
        role = await message.guild.createRole({
            name:"Muted",
            permissions:[]
        });
        message.guild.channels.forEach(async (channel,id) => {
            await channel.overwritePermissions(role,{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false,
                SPEAK:false
            });
        });
    };
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`${em1} нее... Вы не можете дать ему мут!`);
    if(rUser.roles.has(role.id)) return bot.send(`${em1} Этот пользователь уже не может говорить`);
    bot.mutes[rUser.id] = {
        guild:message.guild.id,
        time:parseInt(Date.now() + (args[1]*1000)),
    };
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });           
        
        rUser.addRole(role);
};
module.exports.help = {
    name: "mute"
};
