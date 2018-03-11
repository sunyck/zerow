exports.run = (client, message, args)  => {

    const id = "347598123821957121"
    
    var falas = ['se boku no piko e loiro e travesti, sera que pablo vittar imitou ele ??:thinking:','se "maior" e menor, por que "pequeno" e maior']
    const variavel = falas[Math.round(Math.random()*falas.length-1)]
    message.channel.send({embed: {
           description: "**<@" + message.author.id + "> Filosofia do dia :smirk:**" ,
            color: "65535",
             timestamp: new Date(),
             imagem: {
              falas: variavel }}})
        

            }