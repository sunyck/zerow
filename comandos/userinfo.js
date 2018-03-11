exports.run = (client, message, args)  => {

    const id = "347598123821957121"
    let user = message.mentions.users.first();
        message.channel.send({  "embed": {
            "title": `**-= Perfil do ${message.mentions.username} =-**`,
            "description": "Informações",
            "color": 77223,
            "thumbnail": {
              "url": message.mentions.avatarURL
            },
            "author": {
              "name": `-= Perfil =-`,
              "icon_url": message.mentions.avatarURL
            },
            "fields": [
              {
                "name": "**:tv: Quantidade de Guilds**",
                "value": `${message.mentions.guild}`
              },
              {
                "name": "**:busts_in_silhouette: Quantidade de amigos**",
                "value": `${message.mentions.UsersProfile}`
              },
              {
                "name": "**:bust_in_silhouette: Nick**",
                "value": `${message.mentions.tag}`
              },
              {
                "name": "**Id Do chat**",
                "value": `${message.channel.id}`
              },
              {
                "name": "**Conta criada em**",
                "value": `**${message.mentions.createdAt}**`
              }
            ]
        }
        });
        }