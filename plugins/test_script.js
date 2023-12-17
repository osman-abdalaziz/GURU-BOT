let handler = async (m, { conn, text, usedPrefix, command }) => {
    m.reply(
        "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    );
    m.react("🧑‍💻");
};

handler.help = ["Osman"];
handler.tags = ["Osman"];
handler.command = /^(Osman)$/i;

export default handler;
