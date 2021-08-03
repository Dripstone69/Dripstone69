exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
        if(!member) { message.channel.send("Hi! Ich bin DripBot.");} else {
            message.channel.send(`Hallo <@${member.user.id}>!`)
        }
}

exports.help = {
    name: "hello"
}