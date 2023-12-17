let handler = async (m, { conn, text, usedPrefix, command }) => {
    m.reply(
        "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    );
    m.react("🧑‍💻");
};

handler.help = ["Script"];
handler.tags = ["Script"];
handler.command = /^(Script)$/i;

export default handler;
