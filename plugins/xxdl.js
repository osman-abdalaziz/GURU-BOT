let handler = async(m, { conn, text, usedPrefix, command }) => {
    m.reply("Hello, this is an experimental script that will be developed by Dr.Osman later !");
    m.react("🤗")
};


handler.help = ['Hi','Hello'];
handler.tags = ['Hi'];
handler.command = /^(Hi|Hello)$/i;

export default handler;
