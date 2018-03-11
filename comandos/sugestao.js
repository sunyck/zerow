exports.run = (client, message, args)  => {
    const config = require('./config.json');
  let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('Voce precisa inserir o texto para inserir sua sugestao');
    message.delete()
    client.guilds.get("409395299220717569").channels.get("409395299220717571").sendMessage("**SUGESTAO\n \n  \n sugestao enviada por <@" + message.author.id + "> \nFIM**");
    message.channel.sendMessage({embed: {
     description:"**Sua Sugestão Foi Enviada Para o Criador**",
    color: "117778"
    }}
    )}