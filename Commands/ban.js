const Discord = require("discord.js")
exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You cant use that!')
    
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Ungültiger Name!")
    let reason = args.slice(1).join(" ")
    if(!reason) (reason = "[Keine Begründung angegeben]")
    message.channel.send("What i'm about to do..")
    setTimeout(function(){ 
        message.channel.send("I am going to enjoy very, very much."); 
    }, 2000);
    setTimeout(function(){
        member.ban({reason: reason});
    }, 7000);
    setTimeout(function(){
        const Embed = new Discord.MessageEmbed()
    .setColor("#00e5ff")
    .setThumbnail("https://lh3.googleusercontent.com/proxy/Yc5Do_LGgaTTOn2f6xR5_2t-JCvZUYrJ6VVEvEAl2woCZ3t-ALUf14RrdgA5E0TsOG0L0frSK7oYoupgOTaSVJztLZxPb-nxnfraU6TIkSXEzEPVtVQ")
    .addField("Ban:", `**<@${member.user.id}>** Wurde wegen ${reason} gebannt.`)
    .setFooter('Time Unbanned', bot.user.displayAvatarURL())
    .setTimestamp()


    message.channel.send(Embed)
    }, 8000);
    
}

exports.help = {
    name: "ban"
}