const Discord = require("discord.js")
exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send('You cant use that!')

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Ungültiger Name!")
    let reason = args.slice(1).join(" ")
    if(!reason) (reason = "Keine Begründung angegeben.")
    const role = await message.guild.roles.resolve("852531247045804032");
    member.roles.add(role, reason)
    const Embed = new Discord.MessageEmbed()
    .setColor("#00e5ff")
    .setThumbnail("https://static.thenounproject.com/png/390515-200.png")
    .addField("Mute:", `**<@${member.user.id}>** Wurde wegen [${reason}] gemuted.`)

    message.channel.send(Embed)
}

exports.help = {
    name: "mute"
}