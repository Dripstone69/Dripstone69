const Discord = require("discord.js")
exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You cant use that!')

    
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Ungültiger Name!")
    let reason = args.slice(1).join(" ")
    if(!reason) (reason = "Keine Begründung angegeben.")
    member.kick(reason)
    const Embed = new Discord.MessageEmbed()
    .setColor("#00e5ff")
    .setThumbnail("https://i.dlpng.com/static/png/6967850_preview.png")
    .addField("Kick:", `**<@${member.user.id}>** Wurde wegen ${reason} gekickt.`)

    message.channel.send(Embed)
}

exports.help = {
    name: "kick"
}