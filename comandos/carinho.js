exports.run = (client, message, args)  => {
    
    var falas =['https://www.tenor.co/EHAi.gif', 'https://www.tenor.co/MkY7.gif','https://www.tenor.co/uth7.gif', 'https://www.tenor.co/wCHv.gif','https://giphy.com/gifs/friend-anime-gif-MC7fYhbA4ociQ']
        let user = message.mentions.users.first();
        const variavel = falas[Math.round(Math.random()*falas.length-1)]
        if (message.mentions.users.size < 1) return message.reply('**Você Não Mencionou O Usuario Que Você Quer Dar carinho!**').catch(console.error);
        message.channel.send({embed: {
               description: "**<@" + message.author.id + "> :heart: fez carinho em <@" + user.id + ">**" ,
                color: "1665535",
                 timestamp: new Date(),
              image:{ }}})
}