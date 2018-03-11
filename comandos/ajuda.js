exports.run = (client, message, args) => {

    message.channel.send("**mensagem enviada no seu privador divirta-se :blue_heart:**")
    message.author.send({embed: {
        "description":"**Minha prefix: zr> \n\n:book:Meus comandos \n:man: COMANDOS DE USUARIO \n\nperfil \navatar (nick do usuario) \n\n:high_brightness: DIVERSAO \n\nvoadora \npesquisar (bugs sendo resolvidos...) \nbeijar \n\n:robot: BOT \n\ninfo > comando sendo atualizado \ndonate \nping \nhost > use esse comando para ver atualizçoes \n\nsugestao (sua sugestao) \n\n:crystal_ball: SERVIDOR \n\nban (Necessita de permissoes) \nkick (Necessita de permissoes)**",
        "color": '45646',
    },
    })
}