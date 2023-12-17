let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    m.react('🤗');
  m.relpy("Hello, this is an experimental script that will be developed by Dr.Osman later !");
};


handler.help = ['Hi'];
handler.tags = ['Welcome', 'Hello', 'Hi'];
handler.command = ['Hi', 'Hello'];

export default handler;
