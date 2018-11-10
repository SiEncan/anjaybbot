const Discord = require("discord.js")

module.exports.run = async (bot, message, args) =>{

  if(!args[0]) return message.reply("Tuliskan Pertanyaan Dengan Lengkap!");
  let replies = ["Iya", "Enggak", "Kayaknya..","Mana Gw Tau..", "Tanya aja ama Emak lu"];

  let jawaban =  Math.floor((Math.random() * replies.length));
  let pertanyaan = args.slice(0).join (" ");

  let ballembed =  new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#9c12b7")
  .addField("Pertanyaan", pertanyaan)
  .addField("Jawaban", replies[jawaban]);

  message.channel.send(ballembed);

}

  module.exports.help = {
    name: "anjay"
  }
