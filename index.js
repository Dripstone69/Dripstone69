const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();

const activity = ["Version 1.9 ", "Gameunity™", "Update 2.0 SOON", "New Commands!", "8 Days until 2.0!"];

module.exports.cmdUpdate = function registerCMDs() {
  bot.commands = new Discord.Collection();
  const CommandFiles = fs
    .readdirSync("./commands/")
    .filter((files) => files.endsWith(".js"));
  for (const file of CommandFiles) {
    const command = require(`./commands/${file}`);

    if (command.help) {
      bot.commands.set(command.help.name, command.run);
    } else {
      bot.commands.set(command.name, command);
    }
  }
  for (const cmd of bot.commands) {
  }
};

this.cmdUpdate();

bot.on("ready", () => {
  console.log(
    "Bot went online. The bot will be automatically restarted when updated."
  );
  let i = 0;
  setInterval(() => {
    const index = Math.floor(i);
    bot.user.setActivity(activity[index], { type: "WATCHING" });
    i = i + 1;
    if (i === activity.length) i = i - activity.length;
  }, 15000);
});

bot.on("message", message => {
  if (message.content.toLowerCase() == "shutdown") {
      message.channel.send("⚠️Shutting down...").then(() => {
          bot.destroy();
      })
  }
})


bot.on("guildMemberAdd", (guildMember) => {
  let welcomeRole = guildMember.guild.roles.cache.find(
    (role) => role.name === "Member"
  );

  guildMember.roles.add(welcomeRole);
});

bot.on("message", (message) => {
  let prefix = "+";

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = bot.commands.get(args.shift().toLowerCase());
  if (cmd) {
    cmd(bot, message, args);
  }
});

bot.on("channelCreate", (channel) => {
  console.log(channel.name);
});

bot.login("ODIwMzkyMTk1Nzg5MDI5NDE2.YE0fxQ.QuVjpyvJxkUnNo058cGN3th4Nm8");
