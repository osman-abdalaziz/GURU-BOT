let handler = async (m, { conn, text }) => {
    let who;
    m.react("🕛");
    if (m.isGroup) {
        who = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text;
    } else {
        who = m.chat;
    }
    let name = await conn.getName(m.quoted.sender);
    if (!who) throw "Tag the person you want to make an SUDO!";
    if (global.owner.includes(who.split("@")[0]))
        throw "This person is already an SUDO!";
    global.owner.push([who.split("@")[0], name, true]);
    conn.sendFile(m.chat, './Assets/congrads.gif', 'https://i.ibb.co/RpDMgWt/guru.jpg', '*Congratulations* 🥳', m, false);
    const caption = `🔓 SUDO Unlocked | @${who.split("@")[0]} \n ✅ Now has been made an *SUDO user*! 🥳`;
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption),
    });
    m.react("✅");
};
handler.help = ["addsudo", "givesudo"];
handler.tags = ["owner"];
handler.command = /^(add|give|-)(sudo)$/i;
handler.owner = true;

export default handler;
