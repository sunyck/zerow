exports.run = (client, message, args)  => {
    let user = message.mentions.users.first(); 
    let reason = args.slice(1).join(' ');
  if (!message.member.hasPermission(["KICK_MEMBERS"])) return message.reply("**Você não tem permissão para kickar alguem!**");
  if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para eu kickar!**");
  if (reason.length < 2) return message.reply('**Diga um motivo para kickar!**');
  if (!message.guild.member(user).kickable) return message.reply("**Eu não posso dar kick nesse usuário!**")


//               --==EDITAR==--
//
//prefix do bot!
    const prefix = "s!"
//titulo do embed!
    const titulo = "🔊Usuário Kickado!"
//descrição do embed!
    const tituloDescricao = "Um usuário foi kickado do servidor!"
//cor do embed!
    const corEmbed = "65535"
//foto do usuário banido!
    const fotoBanido = message.mentions.users.first().displayAvatarURL
//nome do usuário banido!
    const nomeBanido = message.mentions.users.first().username
//nome da staff que baniu!
    const nomeStaff = message.author.username
//motivo do banimento!
    const motivo = message.content.replace(prefix + `kick ${args[0]} `,"")
//mensagem que aparece no final do embed
    const mensagem = "**Isso não teria acontecido se o " + message.mentions.users.first().username + " Adeus amigo :)!**"


client.guilds.get(message.guild.id).members.get(message.mentions.users.first().id).kick()

message.delete()
message.channel.send({  "embed": {
    "title": titulo,
    "description": tituloDescricao,
    "color": corEmbed,
    "thumbnail": {
      "url": fotoBanido
    },
    "author": {
      "name": nomeBanido,
      "icon_url": fotoBanido
    },
    "fields": [
      {
        "name": "🔨USUÁRIO KICKADO:",
        "value": nomeBanido
      },
      {
        "name": "🌟KICKADO POR:",
        "value": nomeStaff
      },
      {
        "name": "🔎MOTIVO:",
        "value": motivo + "\n\n"
      },
      {
        "name": "💬",
        "value": mensagem
      }
    ]
  }
});
}