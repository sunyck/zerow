exports.run = (client, message, args)  => {
    
    var falas = ['https://i.imgur.com/eyJifvl.gif', 'https://i.imgur.com/UJLizBz.gif', 'http://pa1.narvii.com/6283/e712a566ba35b902c0e5c247909e2a06af43c08f_hq.gif', 'http://25.media.tumblr.com/cb7facdb5b36f5c7d1d3cc470e27d7fa/tumblr_mgofdkZxSY1s3n73ro1_500.gif' , 'http://pa1.narvii.com/6307/89ef9f0f081d4f650603fadee34b5c7a8385f20a_hq.gif' , 'https://uploads.spiritfanfics.com/fanfics/capitulos/201606/fanfiction-originais-ela-que-me-mudou-5729406-060620161504.gif' , 'https://31.media.tumblr.com/817bbeeaf714ade35b833068b1f0e609/tumblr_nn2e1om9YA1sg1ksjo2_r2_500.gif' , 'http://1.bp.blogspot.com/-jvXhXiCpdJM/T4i30Kv1rHI/AAAAAAAAASM/T6SwbhL9BgU/s1600/tumblr_m1e0c6OziO1qc5wono1_500.gif' , 'http://pa1.narvii.com/6333/64523545591c434cb59d3bfa161dfdea10290082_hq.gif' , 'https://uploads.spiritfanfics.com/fanfics/capitulos/201505/fanfiction-naruto-kakashi-e-a-lua-3511416,190520152001.gif']
        let user = message.mentions.users.first();
        const variavel = falas[Math.round(Math.random()*falas.length-1)]
        if (message.mentions.users.size < 1) return message.reply('**Você Não Mencionou O Usuario Que Você Quer Dar Beijo!**').catch(console.error);
        message.channel.send({embed: {
               description: "**<@" + message.author.id + "> Deu um Beijo em <3 <@" + user.id + ">**" ,
                color: "46546",
                 timestamp: new Date(),
              image: {
                   url: variavel  }}})
            
    
                }