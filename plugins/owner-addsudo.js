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
    if (!who) throw "Tag the person you want to make an Sudo!";
    if (global.owner.includes(who.split("@")[0]))
        throw "This person is already an Sudo!";
    global.owner.push([who.split("@")[0], name, true]);
    const caption = `✅ SUDO | @${
        who.split("@")[0]
    } \n Now has been made an Sudo user! 🥳`;
    conn.sendMessage(m.chat, {
                        video: { url: "./Assets/congrads.gif" },
                        caption: caption,
                        gifPlayback: true
                    }, m, {
        mentions: conn.parseMention(caption),
    })
    // await conn.reply(m.chat, caption, m, {
    //     mentions: conn.parseMention(caption),
    // });
    m.react("✅");
};
handler.help = ["addsudo", "givesudo"];
handler.tags = ["owner"];
handler.command = /^(add|give|-)(sudo)$/i;
handler.owner = true;

export default handler;
