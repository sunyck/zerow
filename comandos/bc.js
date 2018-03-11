exports.run = (client, message, args)  => {
    let user = message.mentions.users.first(); 
    let reason = args.slice(0).join(' ');
        if (message.author.bot) return message.reply("**Bots não podem usar esse comando!**")
        if (reason.length < 1) return message.reply('**Mencione o bot ou mande o id dele!**');
        if (message.mentions.users.size < 1) return message.reply(":gem: **" + message.author.username + "** Aqui está: https://discordapp.com/oauth2/authorize?client_id=" + message.content.replace("s!botconvite ","") + "&scope=bot&permissions=2146958591")
    message.channel.send(":gem: **" + message.author.username + "** Aqui está: https://discordapp.com/oauth2/authorize?client_id=" + message.mentions.users.first().id + "&scope=bot&permissions=2146958591");
}