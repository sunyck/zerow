exports.run = (client, message, args) => {

    message.channel.send({embed:{
        description: `**Pong :ping_pong: \n :satellite_orbital: meu ping é ${client.ping}ms**`,
        color: "536456"
    }})
}

