let handler = async (m, { conn }) => {
  // let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  // let name = conn.getName(who)
  // let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
  // conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/gay', {
  //   avatar: pp, 
  // }), 'gay.png', `🏳️‍🌈  *Gay :* ${name}\n\nWho wants to rape this gay☠️? `, m)

  m.reply("This Command Is Disabled By Dr.Osman")
}

handler.help = ['gay @user']
handler.tags = ['fun']
handler.command = ['gay'] 

export default handler
