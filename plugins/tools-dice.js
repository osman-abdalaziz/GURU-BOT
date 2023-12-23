let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    // m.relpy("This Command Is Disabled By Dr.Osman");

    let result = Math.floor(Math.random() * 6) + 1;
    let pp;
    switch (result) {
        case 1:
            pp = "./Assets/dice/die_1.png";
            break;
        case 2:
            pp = "./Assets/dice/die_2.png";
            break;
        case 3:
            pp = "./Assets/dice/die_3.png";
            break;
        case 4:
            pp = "./Assets/dice/die_4.png";
            break;
        case 5:
            pp = "./Assets/dice/die_5.png";
            break;
        case 6:
            pp = "./Assets/dice/die_6.png";
            break;
    }
    conn.sendFile(m.chat, pp);
    m.react("🎲");
};

handler.help = ["dice"];
handler.tags = ["dice"];
handler.command = ["dice"];

export default handler;
