exports.run = (client, message, args)  => {
let reason = args.slice(0).join(' ');
const config = require('./config.json');
  if (reason.length < 1) return message.reply('Diga um nome para eu criar um cargo!');
if (!message.member.hasPermission(["MANAGE_ROLES"])) return message.reply("Você não tem permissão para criar um cargo!").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
message.channel.send("**:ok: Criado o cargo `" + message.content.replace() + "` com sucesso :ok: **").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
message.guild.createRole({'name': )};
message.delete()
}
