const Discord = require("discord.js")

module.exports.run = async (bot, message, args) =>{

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Uhh.");
  if(!args[0]) return message.channel.send ("Oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Membersihkan ${args[0]} Pesan.`).then(msg => msg.delete(2000));

  })
}

module.exports.help = {
  name: "clean"
}
