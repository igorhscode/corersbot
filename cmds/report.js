const Discord = require("discord.js");
 
module.exports.run = async(bot, message, args) => {
    //p!report [user] [reason]
let Ruser = message.mentions.members.first( );
let Rreason = args.slice(1).join( " " );
let inline = true;
if(Ruser.hasPermission("ADMINISTRATOR"))
return message.reply("нее... Вы не можете кинуть на него жалобу!");
 
    if(!Rreason) {
        return message.channel.send("Вы не правильно оформили валентинку. Попробуйте так: `sun!report [ник] [причина]`")
    } else if(!Ruser) {
        return message.channel.send("Вы не правильно оформили валентинку. Попробуйте так: `sun!report [ник] [причина]`")
    };
let reportembed = new Discord.RichEmbed()
    .setFooter(`Жалобу отправил(а): ${ message.author.username}`)
    .setTitle('Жалоба')
    .setColor('#ff0000')
    .addField('Ник нарушителя:', `${Ruser}`, inline)
    .addField('Жалоба в канале:', `${message.channel}`, inline)
    .addField('Причина:', `${Rreason}`)
 
    message.channel.send('Ваша жалоба была успешно отправлена! спасибо за жалобу!');
    message.guild.channels.get('675782379842961457').send(reportembed);
    message.guild.channels.get('575671900978806814').send('Новая жалоба в #жалобах ! @here');
}
 
module.exports.help = {
    name: "report"
}
