
const Discord = require("discord.js")
const Canvas = require("canvas")
const canvas = Canvas.createCanvas(1050, 250);
const ctx = canvas.getContext('2d');
const fs = require('fs');
const fetch = require("node-fetch");
let xp = require('../xp.json')
const db =  require('quick.db')
module.exports.run = async (bot, message, args) => {

    if(!xp[message.author.id]){
        xp[message.author.id] = {
          xp: 0,
          level: 1
       };
     }
       let muser = message.author.id
       let curxp = xp[message.author.id].xp;
       let curlvl = xp[message.author.id].level;
       let nxtLvlXp = curlvl * 300;
       let difference = nxtLvlXp - curxp;

    
    fs.writeFile("../xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
    });
    ctx.fillStyle = "#000000"
    ctx.fillRect(0,0,5000,5000)

    const background = await Canvas.loadImage('https://sun9-29.userapi.com/c857436/v857436957/174a08/fR-sxydbNhQ.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

 
    ctx.font = '65px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`Уровень: ${curlvl}`, canvas.width / 2.7, canvas.height / 1.5);

    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();


    const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
    ctx.drawImage(avatar, 25, 25, 200, 200);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
    message.channel.send(attachment)
}
module.exports.help = {
    name: "level"
}
