exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send('You cant use that!')

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Ungültiger Name!")
    let reason = args.slice(1).join(" ")
    if(!reason) (reason = "Keine Begründung angegeben.")
    const role = await message.guild.roles.resolve("830005018558988300");
    member.roles.remove(role)
    message.channel.send(`**<@${member.user.id}>** Wurde unmuted.`)
}

exports.help = {
name: "unmute"
}