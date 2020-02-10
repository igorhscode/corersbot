const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) =>{
    try{
        function send (msg){
            message.channel.send(msg);
        }

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!args[0]) return send("Вы не указали пользователя");
    if(!rUser) return send("Пользователь не найден");
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply("нее... Вы не можете дать ему игровое предупреждение!");
    profile[rUser.id].gamewarns++;
    fs.writeFile('../profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription("Игровое предупреждение")
    .addField("Администратор",message.author.username)
    .addField("Выдал игровое предупреждение",`${rUser.user.username}`)
    .addField("Количество игровых предупреждений",`${profile[rUser.id].gamewarns}/3`);

    message.channel.send(embed);
    }catch(err){
    if(err.name === "ReferenceError")
    console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
}

};
module.exports.help = {
    name: "gamewarn"
};