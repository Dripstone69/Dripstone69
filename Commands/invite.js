const Discord = require("discord.js");
exports.run = async (bot,message,args) => {
    const Embed = new Discord.MessageEmbed()
    .setColor("#00e5ff")
    .setTitle("Einladungslinks:")
    .setThumbnail("https://polyglotclub.com/UserFiles/images/discord.png")
    .addField("Hier hast du einen Link, mit dem du mich auf deinen Server einladen kannst!", "https://discord.com/oauth2/authorize?client_id=820392195789029416&scope=bot&permissions=0")
    .addField("Hier hast du noch einen Link von unserem Server! Lad doch gerne deine Freunde ein!", "https://discord.gg/xAwBBgS7dq")

    message.channel.send(Embed)
}
exports.help = {
    name: "invite"
}