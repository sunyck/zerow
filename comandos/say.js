exports.run = (client, message, args)  => {
    const config = require('./config.json');
  let reason = args.slice(0).join(' ');
  var say = args.join(" ")
    if (reason.length < 1) return message.reply('Você precisa inserir o texto que eu irei falar');
    message.channel.send(say);
  }