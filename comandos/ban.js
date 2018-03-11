exports.run = (client, message, args)  => {
    let user = message.mentions.users.first(); 
    let reason = args.slice(1).join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.reply("**Você não tem permissão para banir alguem!**");
  if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para eu banir!**");
  if (reason.length < 2) return message.reply('**Diga um motivo para banir!**');
  if (!message.guild.member(user).bannable) return message.reply("**Eu não posso dar ban nesse usuário!**")


//               --==EDITAR==--
//
//prefix do bot!
    const config = require('./config.json'); // a pasta de Configurações do bot
    const prefix = config.prefix // prefix do bot
//titulo do embed!
    const titulo = "🔊Usuário Banido!"
//descrição do embed!
    const tituloDescricao = "Um usuário foi banido do servidor!"
//cor do embed!
    const corEmbed = "665535"
//foto do usuário banido!
    const fotoBanido = message.mentions.users.first().displayAvatarURL
//nome do usuário banido!
    const nomeBanido = message.mentions.users.first().username
//nome da staff que baniu!
    const nomeStaff = message.author.username
//motivo do banimento!
    const motivo = message.content.replace(`o ${args[0]} `,"")
//mensagem que aparece no final do embed
    const mensagem = "**Isso não teria acontecido se o " + message.mentions.users.first().username + " tivesse respeitado as regras!**"


client.guilds.get(message.guild.id).members.get(message.mentions.users.first().id).ban()

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
        "name": "🔨USUÁRIO BANIDO:",
        "value": nomeBanido
      },
      {
        "name": "🌟BANIDO POR:",
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