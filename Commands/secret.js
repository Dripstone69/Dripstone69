exports.run = async (bot,message,args) => {
    
            message.channel.send(`<@${member.user.id}> hat den geheimen Command gefunden! Du bekommst eine versteckte Belohnung! ;)`)
    const role = await message.guild.roles.resolve("832992921413746738");
        member.roles.add(role)
}

exports.help = {
    name: "secret"
}