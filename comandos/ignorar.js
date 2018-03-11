exports.run = (client, message, args)  => {
    var falas = ['https://media.giphy.com/media/kpKXslUXPkNLG/giphy.gif', 'https://s.yimg.com/ny/api/res/1.2/SDEdgUzfZ01li10JA.WFsQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTQw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/ac8684c4100212036d68cc334a9e8415', 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/24/6/enhanced/webdr07/anigif_enhanced-25855-1448364119-2.gif', 'http://33.media.tumblr.com/a5b86c6e165808ec81f622d7cbe81f9c/tumblr_nb6txpFPpk1r3gb3zo8_400.gif']
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('**Você Não Mencionou O Usuario Que Você Quer Ignorar**').catch(console.error);
    message.channel.send(falas[Math.round(Math.random()*falas.length-1)], 'ignorar.gif');
    message.channel.send("**<@" + message.author.id + ">Esta Ignorando<@" + user.id + ">**");
    }