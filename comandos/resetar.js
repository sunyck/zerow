const Discord = require("discord.js");
const fs = require("fs")

exports.run = (bot, message, args) => {
	let argsJunto = message.content.split(" ").slice(1).join(' ')
	if(message.author.id === '347598123821957121') {
    if(argsJunto.length < 1) {
    	message.channel.sendMessage(`Diga um comando para ser resetado.`); 
    } else {
    	delete require.cache[require.resolve(`./${args[0]}.js`)];
			message.channel.sendMessage({embed: {
				description:'**O comando `' + argsJunto + '` foi resetado.**',
				color:"564644"
			}}
			)}
  // the path is relative to the *current folder*, so just ./filename.js
} else {
  	message.channel.sendMessage('')
  }
}