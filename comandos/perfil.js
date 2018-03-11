exports.run = (client, message, args)  => {

const user = message.mentions.users.first() || message.author

    message.channel.send({  "embed": {
        "title": `**-= Perfil do ${message.author.username} =-**`,
        "description": "Informações",
        "color": 77223,
        "thumbnail": {
          "url": message.author.avatarURL
        },
        "author": {
          "name": `-= Perfil =-`,
          "icon_url": message.author.avatarURL
        },
        "fields": [
          {
            "name": "**:tv: Quantidade de Guilds**",
            "value": `${message.author.guild}`
          },
          {
            "name": "**:busts_in_silhouette: Quantidade de amigos**",
            "value": `${message.author.UsersProfile}`
          },
          {
            "name": "**:bust_in_silhouette: Nick**",
            "value": `${message.author.tag}`
          },
          {
            "name": "**Id Do chat**",
            "value": `${message.channel.id}`
          },
          {
            "name": "**Conta criada em**",
            "value": `**${message.author.createdAt}**`
          },
          {
            "name": 'info',
            "value": `**usuario -->** ${message.author.username} **<-- no chat -->** ${message.channel.name}`
          }
        ]
    }
    });
    }