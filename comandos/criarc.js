exports.run = (client, message, args)  => {
let reason = args.slice(0).join(' ');
const config = require('./config.json');
  if (reason.length < 1) return message.reply('Diga um nome para eu criar um canal!');
if (!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.reply("Você não tem permissão para criar um canal!").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
message.channel.send("**:zap: Criado o canal `" + message.content.replace(config.prefix+"ccanal ","") + "` com sucesso :zap: **").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
message.guild.createChannel(message.content.replace(config.prefix+"ccanal ",""));
message.delete()
}