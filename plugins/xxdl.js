let handler = async (m, { conn, usedPrefix, command }) => {
    conn.react('🤗');
  await conn.relpy(m.chat, "Hello, this is an experimental script that will be developed by Dr.Osman later !", m);
};


handler.help = ['Hi'];
handler.tags = ['Welcome', 'Hello', 'Hi'];
handler.command = ['Hi', 'Hello'];

export default handler;
