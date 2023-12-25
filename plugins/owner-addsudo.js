let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text;
    } else {
        who = m.chat;
    }
    if (!who) throw "Tag the person you want to make an Premium!";
    let name = await conn.getName(m.quoted.sender);
    let user = global.db.data.users[who];
    if (global.owner.includes(who.split("@")[0]))
        throw "This person is already an owner!";
    global.owner.push([who.split("@")[0], name, true]);
    m.react("✅");
    // const caption = `🔓 Premium | Now @${
    //     who.split("@")[0]
    // } \n has been made a Premium user! 🥳`;
    // conn.sendFile(m.chat, "./Assets/congrads.gif", caption, {
    //     mentions: [who],
    // });
    conn.reply(
        m.chat,
        `
🔓 Premium | @${who.split`@`[0]}
now you become a Premium user! 🥳
┌───────────
▢ *Number:* ${user.name}
└───────────
`,
        m,
        { mentions: [who] }
    );
};
handler.help = ["addsudo", "givesudo"];
handler.tags = ["owner"];
handler.command = /^(add|give|-)(sudo)$/i;
handler.rowner = true;
handler.admin = true;

export default handler;
