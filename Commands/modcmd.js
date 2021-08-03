const Discord = require("discord.js")
exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You cant use that!')

    // message.channel.send(`Hier eine Liste aller Commands:`)
    const Embed = new Discord.MessageEmbed()
    .setColor("#00e5ff")
    .setTitle(`Hier eine Liste mit allen Mod Commands:`)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/9/92/4228_discord_bot_dev.png")
    .addField("Message-Clear:", "+clear <Anzahl der Nachrichten>")
    .addField("Kick:", "+kick <User> <Grund>")
    .addField("Ban:", "+ban <User> <Grund>")
    .addField("Mute:", "+mute <User> <Grund>")
    .addField("Unmute:", "+unmute <User> <Grund>")
    .addField("Userinfo:", "+userinfo <User> | +ui <User>")
    .addField("Spitznamen ändern:", "+nick <User> | +nickname <User>")

    message.channel.send(Embed)
}


exports.help = {
    name: "modcmd"
}