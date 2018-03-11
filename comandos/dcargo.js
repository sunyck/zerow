exports.run = (client, message, args)  => {
    const config = require('./config.json');
if (!message.member.hasPermission(["MANAGE_ROLES"])) return message.reply("Você não tem permissão para excluir um cargo!").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
message.channel.send("**:x: Excluido o cargo `" + message.content.replace(config.prefix+"dcargo ","") + "` com sucesso :x: **").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
message.guild.roles.find("name",message.content.replace(config.prefix+"dcargo ","")).delete()
message.delete()
}