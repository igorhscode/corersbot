const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "fig") 
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#d18dda") 
    .setDescription(`

${em2} **Музыкальный Bot Ритм**

!play - включит в очередь выбранную композицию.
!np - покажет активную композицию.
!skip - проголосовать за пропуск композиции.
!lyrics - выдает текст песни, если он имеется.
!pause - поставит на паузу текущую композицию.
!resume - продолжит воспроизведение поставленной на паузу композиции.
!queue - покажет очередь.
!stop - остановит бота.
!leave - бот покинет канал.

${em2} **Музыкальный Bot Груви**

-play - включить выбранную композицию.
-next - пропустит композицию.
-back - вернет предыдущую композицию.
-song - покажет текущую композицию.
-pause - остановит композицию.
-clear - очистит список.
`)
    .setImage("https://cdn.discordapp.com/attachments/575680577831698432/675426372570710016/-1.png")
    bot.send(embed);
};
module.exports.help = {
   name: "help2"
};