const Discord = require("discord.js")

module.exports.run = async (bot, message, args) =>{
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) message.channel.send("Tidak Dapat Menemukan User!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tidak Dapat Melakukan Command");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("User Tersebut Tidak Dapat DiKick!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#b20c0c")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "log");
    if(!kickChannel) return message.channel.send("Tidak dapat menemukan server bernama `log`");

    message.guild.member(kUser).kick(kReason)
    kickChannel.send(kickEmbed);

    return message.channel.send("User Tersebut Telah TerKick");
  }

  module.exports.help = {

  name: "kick"
  }
