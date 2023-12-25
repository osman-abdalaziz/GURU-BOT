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
    let name = await conn.getName(m.quoted.sender);
    if (!who) throw "Tag the person you want to make an Sudo!";
    if (global.owner.includes(who.split("@")[0]))
        throw "This person is already an Sudo!";
    global.owner.push([who.split("@")[0], name, true]);
    const caption = `🔓 SUDO | @${
        who.split("@")[0]
    } \n Now has been made an Sudo user! 🥳`;
    await conn.sendMessage(
        m.chat,
        { Image: "./Assets/congrads.gif", caption: caption },
        m,
        { mentions: conn.parseMention(caption) }
    );
};
handler.help = ["addsudo @user"];
handler.tags = ["owner"];
handler.command = /^(add|give|-)(sudo)$/i;
handler.rowner = true;
handler.admin = true;

export default handler;
