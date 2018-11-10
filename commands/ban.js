const Discord = require("discord.js")

module.exports.run = async (bot, message, args) =>{
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("***Tidak Dapat Menemukan User!***");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tidak Dapat Melakukan Command");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("User Tersebut Tidak Dapat DiBanned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#8e0808")
    .addField("Ban User", `${bUser} Dengan ID ${bUser.id}`)
    .addField("Banned by", `<@${message.author.id}> Dengan ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "log");
    if(!banChannel) return message.channel.send("Tidak dapat menemukan server bernama `log`");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);



    return message.channel.send("`User Tersebut Telah TerBan`");
  }

  module.exports.help = {

  name: "ban"
  }
