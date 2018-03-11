const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8' ));

fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err);
    })

if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000;

if (bot.user.id === message.author.id) { return }
	
	if (msg === config.prefix + 'money' || msg === config.prefix + 'baltop') {
	    message.channel.send({embed:{ 
		"title": "Banco",
		"color": FE02E7,
		"fields": [{
		"name": "Conta bancaria",
		"value":message.author.username,
        "inline": true
},
{
         "name": "dinheiro na conta",
         "value":userData[sender.id | message.guild.id].money,
         "inline": true
      }]		 
		}})
	
	bot.on('ready', () => {
	    console.log('Economia iniciando....')
		})

client.login("NDE3MDE4NzI3MDQxODU5NTg0.DXM6fw.3ZJQ_gEz49qaJMub7sMqwJXtyCk")
    }