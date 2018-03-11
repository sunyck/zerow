exports.run = (client, message, args)  => {
    let reason = args.slice(0).join(' ');

    const id = "347598123821957121"
    
      if (message.author.id !== id) return message.reply("**Somente meu CRIADOR pode fazer isso! :rage:**");
      if (message.author.bot) return message.reply("**Bots não podem usar esse comando!**")
      if (reason.length < 1) return message.reply('**Deve mandar o link da imagem! :heart:**');
      client.set.avatarURL(args[0]);
      message.reply("**Avatar setado!**");
    }