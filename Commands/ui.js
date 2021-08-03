const Discord = require("discord.js")
exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Ungültiger Name!")
    // message.channel.send(`Benutzerinfo von <@${member.user.id}>:`)
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Benutzerinfo von __${member.user.username}__:`)
    .setColor("#00e5ff")
    .setThumbnail(member.user.avatarURL())
    .addField("Tag:", member.user.tag)
    .addField("Account erstellt am:", member.user.createdAt)
    .addField("Dem Server gejoint am:", member.joinedAt)

    // console.log(message.guild.roles.cache)
var roles = ""
for(const role of member.roles.cache){
     //Embed.addField(role[1].name, role[1].createdAt)
     roles = roles + "\n- " + role[1].name;
}

Embed.addField("Rollen:", roles)


    message.channel.send(Embed)
}


exports.help = {
    name: "ui"
}