const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send('You cant use that!')
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Ungültiger Name!")

    args.shift()
    const nickname = args.join(' ')

    member.setNickname(nickname)

    message.reply('You changed the nickname!')
  }

  exports.help = {
    name: "nickname"
}