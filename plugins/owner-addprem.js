import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command[0]}) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Tag or mention someone\n\n📌 Example : ${usedPrefix + command[0]} @user`
if (global.prems.includes(who.split`@`[0])) throw '✳️ The user Mentioned Already is premium';
global.prems.push(`${who.split`@`[0]}`);

conn.react(✅);
let lkr = `✅ PREMIUM | @${who.split`@`[0]} now you become a premium user 🥳`;
conn.sendFile(m.chat, './Assets/congrads.gif', 'https://i.ibb.co/RpDMgWt/guru.jpg', lkr, m, false, { mentions: [who] });
    
// conn.reply(m.chat, `
// ✅ PREMIUM

// @${who.split`@`[0]} now you become a premium user
// `, m, { mentions: [who] })

    
}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
