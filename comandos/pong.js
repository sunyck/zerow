exports.run = (client, message, agrs) => {
    
const id = "347598123821957121"

var falas = ['https://www.tenor.co/zvGf.gif']
if (message.author.id !== id) return message.reply("**Por enquanto so meu criador pode far esse comando:black_heart:**");
const variavel = falas[Math.round(Math.random()*falas.length-1)]
message.channel.send({embed: {
       description: "**Vamos gozar juntos senpai :3 Ahhh**" ,
        color: "65535",
         timestamp: new Date(),
      image: {
           url: variavel  }}})
    

        }