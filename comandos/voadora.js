exports.run = (client, message, args)  => {
    var falas = ['https://giphy.com/gifs/haha-OnvNITfmlKFZS']
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('**Você Não Mencionou O Usuario Que Você Quer Dar Uma Voadora!**').catch(console.error);
    message.channel.send(falas[Math.round(Math.random()*falas.length-1)], 'voadora.gif');
    message.channel.send("**você <@" + message.author.id + "> deu uma Voadora em <@" + user.id + ">**");
    message.delete()
    }