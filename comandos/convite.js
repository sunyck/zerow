exports.run = (client, message, args) => {
    message.channel.send({embed: {
        description:  "**:gem:**" + message.author.username + "**Aqui meu convite Aproveite [CLIQUE AQUI!](https://discordapp.com/oauth2/authorize?client_id=409127329181466624&scope=bot&permissions=2146958591)**"
    }})
}