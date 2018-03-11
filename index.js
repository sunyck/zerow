console.log('Iniciando....')
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json'); // a pasta de Configurações do bot
const fs = require('fs')
const url = "https://cdn.discordapp.com/avatars/371353272818335744/7c574242ac470711776c5dfc3a6b58ee.png?size=2048";
// Dono: NoKing // Ajudante: Shiro <3
 
client.on("ready",  () => {
 
  client.user.setPresence({game: { name: `Prefix: z!ajuda Pessoas: ${client.users.size}` , type: 1,  url: "https://www.twitch.tv/az4zell"}})
    setInterval(() => {
  client.user.setPresence({game: { name: `Prefix: z!ajuda Pessoas: ${client.users.size}` , type: 1,  url: "https://www.twitch.tv/az4zell"}})
    },1 * 60 * 1000)
    });

//Permições de Comandos nas Pastas
fs.readdir("./events/", (err, files) => { // pasta que é para ser lida
    if (err) return console.error(err); // erro caso teja algo bugado
    files.forEach(file => { // pesquisa os arquivos e dps reproduz
      let eventFunction = require(`./events/${file}`); // pega os arquivos do evento
      let eventName = file.split(".")[0]; // le eles
  client.on(eventName, (...args) => eventFunction.run(client, ...args)); // e depois reproduz
    });
  });
  
client.on("message", message => {
    if (message.author.bot) return; // Mensagem de Bot, Será ignorada
    if (!message.content.startsWith(config.prefix)) return; // Se não começar com o prefix ignora.
    let command = message.content.split(" ")[0]; // command = oq falar dps da prefix: a!alo
    command = command.slice(config.prefix.length);
   
    let args = message.content.split(" ").slice(1); // "alo"
   
    try {
      let commandFile = require(`./comandos/${command}.js`); // Procura o arquivo na pasta
      commandFile.run(client, message, args); // Executa
    } catch (err) { // caso de erro, serve para não crashar o bot
      console.error(err); // mandará o erro no Systema
    }
  });
    

//Comandos  Trocar de Cargo
  client.on("message", (message) => {
    if (message.author.bot) return; // Mensagem de Bot, Será ignorada
    if (message.channel.type !== 'text') return; // Se não começar com o prefix ignora.
   
    const user = message.mentions.users.first() || message.author;

      if (message.content.startsWith("!test")) {
        client.guilds.get("364472618411098112").members.get(message.author.id).addRole("372110942315741195");
        message.delete(); // Adiciona 1 Cargo especifico de 1 servidor
      }

      if (message.content.startsWith("!test2")) {
        if ( message.guild.id != 364472618411098112 ) return ; // ve se é a guilda especifica
        if ( message.channel.id != 371346028563005442 ) return ; // ve se foi usado naquele chat
        message.channel.replace("oi ;-;") // repete: @user, oi ;-;
        message.delete();
      }

    });

client.login("TOKEN")
console.log('Iniciado!!!')