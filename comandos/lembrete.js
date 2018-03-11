exports.run = (client, message, args)  => {
    let reason = args.slice(0).join(' ');   
    if (reason.length < 1) return message.reply('Voce precisa inserir a quantidade de minutos que o bot ira mandar o lembrete!');   
    if (reason.length < 2) return message.reply('Voce precisa dizer o lembrete!'); message.channel.sendMessage("Lembrete setado!"); 
    setTimeout(function(){ message.author.send(":tickets: Lembrete: " + message.content.replace(`g!lembrete ${args[0]}`,"")); },`${args[0]}` * 60 * 1000) 
   }