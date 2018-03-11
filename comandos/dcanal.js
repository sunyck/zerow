exports.run = (client, message, args)  => {
    const config = require('./config.json');
if (!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.reply("Você não tem permissão para excluir um canal!").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
message.channel.send("**:x: Excluido o canal `" + message.content.replace("dcanal ","") + "` com sucesso :x: **").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
message.guild.channels.find("name",message.content.replace("dcanal ","")).delete()
message.delete()
}