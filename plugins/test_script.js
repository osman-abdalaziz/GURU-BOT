const make = require("mumaker");

let handler = async (m, { conn, text, usedPrefix, command }) => {
    // m.reply(
    //     "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    // );
    make.textpro(
        "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html",
        ["osman"]
    )
        .then((data) => conn.sendFile(m.chat, { image: { url: data } }))
        .catch((err) => m.reply(err));
    m.react("✅");
};

handler.help = ["mlogo"];
handler.tags = ["mlogo"];
handler.command = /^(mlogo)$/i;
handler.admin = true;
handler.group = true;

export default handler;

/* 
