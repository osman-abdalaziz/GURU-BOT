let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
    } else {
        who = m.chat;
    }
    let name = await conn.getName(m.quoted.sender)
    if (!who) throw 'Tag the person you want to make an Owner!';
    if (global.owner.includes(who.split('@')[0])) throw 'This person is already an owner!';
    global.owner.push([who.split('@')[0], name, true]);
    const caption = `🌟SUDO | Now @${who.split('@')[0]} has been made an Owner! 🥳🥳`;
    await conn.sendFile(m.chat, './Assets/giphy.gif', 'https://i.ibb.co/RpDMgWt/guru.jpg', caption, m, false, { mentions: [who] });
}
handler.help = ['addowner @user']
handler.tags = ['owner']
handler.command = /^(add|give|-)(owner|sudo)$/i;
handler.owner = true

export default handler;
