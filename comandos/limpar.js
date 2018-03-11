exports.run = function(a, b, c) {
    const id = "347598123821957121"
    const config = require('./config.json');
    if (!b.member.hasPermission(["MANAGE_MESSAGES"])) { b.reply("Você não tem permissão para limpar o chat!"); return }
    let argss = c.slice(0).join(' ');
    if (c.length < 1) return b.reply('Diga uma quantidade de mensagens que queira Apagar =)').then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
    setTimeout(function() {
        b.channel.send("**" + b.content.replace(config.prefix+"limpar ", "") + " mensagens :mailbox_with_no_mail:**").then((value) => {
            setTimeout(() => {
                value.delete();
            }, 12000);
            setTimeout(() => {
                value.edit("**" + b.content.replace(config.prefix+"limpar ", "") + " mensagens:mailbox_with_no_mail:**");
            }, 1000);
            setTimeout(() => {
                value.edit("**" + b.content.replace(config.prefix+"limpar ", "") + " mensa:mailbox_with_no_mail:**");
            }, 1500);
            setTimeout(() => {
                value.edit("**" + b.content.replace(config.prefix+"limpar ", "") + " m:mailbox_with_no_mail:**");
            }, 2000);
            setTimeout(() => {
                value.edit("**:mailbox_with_no_mail:**");
            }, 2500);
            setTimeout(() => {
                value.edit("**:mailbox_closed:**");
            }, 3000);
            setTimeout(() => {
                value.edit("**:mailbox_closed: Removido " + b.content.replace(config.prefix+"limpar ", "") + " mensagens**");
            }, 3500);
        });
    }, 2000)
    a = parseInt(c.join(" "));
    b.channel.fetchMessages({ limit: a }).then(function(a) {
        return b.channel.bulkDelete(a)
        message.delete()
    })
};