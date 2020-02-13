const Discord = require("discord.js");
 
module.exports.run = async(bot, message, args) => {
let valentin = message.guild.emojis.find(emoji => emoji.name === "valentin")
let valentinrole = message.guild.roles.find(emoji => emoji.name === "Незнакомец")
let Ruser = message.mentions.members.first( );
let Rreason = args.slice(1).join( " " );
let inline = true;
 
    if(!Rreason) {
        return message.channel.send("Вы не правильно оформили валентинку. Попробуйте так: `sun!валентинка [ник] [текст]`")
    } else if(!Ruser) {
        return message.channel.send("Вы не правильно оформили валентинку. Попробуйте так: `sun!валентинка [ник] [текст]`")
    };
let valentintembed = new Discord.RichEmbed()
    .setDescription(`${valentin} ${valentinrole} прислал валентинку ${Ruser}`)
    .setTitle('Валентинка')
    .setColor('#ff0000')
    .addField('Послание:', `${Rreason}`)
    message.delete().catch();
    message.channel.send('Ваша валентинка была успешно отправлена!!');
    message.guild.channels.get('677586055666466836').send(valentintembed);
}
 
module.exports.help = {
    name: "валентинка"
}
