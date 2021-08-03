module.exports.run =  async (bot, message, args)=>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You cant use that!')

        if (!args[0]){
             message.reply("Bitte gib die Anzahl der zu löschenden Nachrichten an!");
             return;
        }
 
        if(isNaN(args[0])){
            message.reply("Bitte gib eine Nummer ein!");
            return
        }
 
        if(args[0] > 100) {
            message.reply("Du kannst nicht mehr als 100 Nachrichten löschen!");
            return
        }
        
        if(args[0] < 1) {
            message.reply("Du musst mindestens eine Nachricht löschen!");
        }
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }   
exports.help = {
    name: "clear"
}