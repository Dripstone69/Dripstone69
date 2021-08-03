const Discord = require("discord.js")
exports.run = async (bot,message,args) => {
    
    // message.channel.send(`Hier eine Liste aller Commands:`)
    const Embed = new Discord.MessageEmbed()
    .setColor("#00e5ff")
    .setTitle(`Hier eine Liste mit allen User Commands:`)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/9/92/4228_discord_bot_dev.png")
    .addField("Hello:", "+hello")
    .addField("Secret-Command:", "+secret")
    .addField("Userinfo:", "+userinfo <User> | +ui <User>")
    .addField("Liste aller Commands:", "+commands | +cmd")
    .addField("Spitznamen ändern:", "+nick <User> | +nickname <User>")
    .addField("Links:", "+invite")

    message.channel.send(Embed)
}


exports.help = {
    name: "usercommands"
}