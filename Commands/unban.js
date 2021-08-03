const Discord = require('discord.js');
exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You cant use that!')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I dont have the permissions.')

    const member = message.mentions.members.first();

    if(!args[0]) return message.channel.send('Please specify a user');





    let reason = args.slice(1).join(" ");

    if(!reason) reason = 'Unspecified';

    message.guild.members.unban(args[0])
    .catch(err => {
        if(err) return message.channel.send('Something went wrong')
    })

    const Embed = new Discord.MessageEmbed()
    .setTitle('Member Unbanned')
    .addField('User Unbanned', user.id)
    .addField('Unbanned by', message.author)
    .addField('Reason', reason)
    .setFooter('Time Unbanned', bot.user.displayAvatarURL())
    .setTimestamp()

    message.channel.send(Embed);


}

exports.help = {
    name: "unban"
}