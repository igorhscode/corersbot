const ytdl = require("ytdl-core");

module.exports.run = (client, message, args, config) => {
    return new Promise((resolve, reject) => {
        if (args.length !== 1) {
            message.channel.send("Play command takes 1 YouTube link.");
            reject("Wrong number of arguments");
            return;
        }
        const voiceChannel = message.member.voiceChannel;
        if(!voiceChannel) {
            message.channel.send("You need to connect to a voice channel first");
            reject("Not connected to voice channel");
            return;
        }
        const perms = voiceChannel.permissionsFor(message.client.user);
        if (!perms.has("CONNECT")) {
            message.channel.send("You need to add the 'connect' permission for this bot");
            reject("NO CONNECT PERMISSION");
            return;
        }
        if (!perms.has("SPEAK")) {
            message.channel.send("You need to add the 'speak' permission for this bot");
            reject("NO SPEAK PERMISSION");
            return;
        }
        const streamOptions = { seek: 0, volume: 1, passes: 2 };
        voiceChannel.join()
            .then(connection => {
                const stream = ytdl(args[0], {filter: 'audioonly'});
                const dispatcher = connection.playStream(steam, streamOptions);
                dispatcher.on("end", reason => {
                    console.log("reason: " + reason);
                    voiceChannel.leave();
                })
                dispatcher.on("error", err => {
                    console.log(err);
                })
            })
        .catch(err => console.log(err));
    });

}
module.exports.help ={
    name:"play"
}