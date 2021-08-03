const Discord = require("discord.js")
exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You cant use that!')

    // message.channel.send(`Hier eine Liste aller Rollen, die du auswählen kannst:`)
    const Embed = new Discord.MessageEmbed()
    .setColor("#00e5ff")
    .setTitle(`Hier eine Liste mit allen Rollen, die du auswählen kannst:`)
    .setThumbnail("https://b.kisscc0.com/20180814/fqe/kisscc0-email-computer-icons-symbol-gold-aol-mail-effect-letters-alphabet-gold-5b72f7958403b5.3767250815342611415407.png")
    .addField("Rot", "<@&863473566892163073>")
    .addField("Blau", "<@&863473785298485268>")
    .addField("Grün", "<@&863473764250550352>")
    .addField("Violett", "<@&863474113917878282>")
    .addField("Braun", "<@&863473401405112321>")
    .addField("Orange", "<@&863474367979323422>")
    .addField("Gelb", "<@&863473557841510481>")

    message.channel.send(Embed)
}


exports.help = {
    name: "roles"
}