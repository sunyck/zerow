exports.run = (client, message, args)  => {
  message.channel.send({  "embed": {
      "title": `Info` ,
      "description": "Minhas Informações",
      "color": "564027",
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/406219795885719554/418968795407843329/350472.jpg"
      },
      "author": {
        "name": "-=ZeroChan=-",
        "icon_url": "https://cdn.discordapp.com/attachments/406219795885719554/418968795407843329/350472.jpg"
      },
      "fields": [
        {
          "name": "**Novo info sendo feito**",
          "value": `Ping :ping_pong: >> ${client.ping} `
          }
      ]
    }
  });
  }