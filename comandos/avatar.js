const talkedRecently = new Set();
exports.run = (client, message, args)  => {
  if (talkedRecently.has(message.author.id))
  return message.reply("**Voce Nao pode usar comandos em menos de 3 segundos!**");  
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 3500);
let reason = args.slice(0).join(' ');  
if (message.mentions.users.size < 1) return message.reply('**Mencione O Usuario Que Voce Quer Ver O Avatar!**'); 
const foto = message.mentions.users.first().avatarURL
message.channel.send({embed: {
    description: "**Avatar Do **" + message.mentions.users.first() + "\n" + ":frame_photo:" + `[**Download (Clique aqui)**](${message.mentions.users.first().avatarURL})`,
     color: "65535",
      timestamp: new Date(),
   image: {
        url: foto }}})

}